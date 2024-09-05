import { ProTable, ActionType } from '@ant-design/pro-components';
import useMenuColumns from './models/columns';
import useMenuData from './models/useData';
import { ModalForm, BetaSchemaForm } from '@ant-design/pro-components';
import { useMemo, useRef, useState } from 'react';
import { Button, message, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

const MenuMange = () => {
  const { listColumns, editColumns } = useMenuColumns();
  const { getList, create, update, remove } = useMenuData();
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [createInitialValues, setCreateInitialValues] = useState<Record<string, any>>({
    parentId: 0,
  });

  const schema = useMemo(() => {
    const schema = [...listColumns];
    schema.push({
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      valueType: 'option',
      render: (_, record) => {
        return [
          <Button
            key={`edit-${record.menuId}`}
            size="small"
            icon={<EditOutlined />}
            type="link"
            onClick={() => {
              setCreateInitialValues(record);
              setVisible(true);
            }}
          ></Button>,
          <Popconfirm
            title="确定删除吗？"
            key={`delete-popconfirm-${record.menuId}`}
            onConfirm={async () => {
              const res = await remove({
                id: record.menuId,
              });
              if (res) {
                message.success('删除成功');
                actionRef.current?.reload();
              }
            }}
          >
            <Button
              key={`delete-${record.menuId}`}
              size="small"
              icon={<DeleteOutlined />}
              type="link"
              onClick={() => {
                console.log(record);
              }}
            ></Button>
          </Popconfirm>,
          <Button
            key={`addCur-${record.menuId}`}
            size="small"
            icon={<PlusOutlined />}
            type="link"
            onClick={() => {
              setCreateInitialValues({
                parentId: record.menuId,
              });
              setVisible(true);
            }}
          ></Button>,
        ];
      },
    });
    return schema;
  }, []);
  return (
    <>
      <ProTable
        rowKey="menuId"
        actionRef={actionRef}
        toolBarRender={() => {
          return [
            <Button
              key="add"
              type="primary"
              onClick={() => {
                setCreateInitialValues({
                  parentId: 0,
                });
                setVisible(true);
              }}
            >
              新建菜单
            </Button>,
          ];
        }}
        columns={schema}
        request={getList}
        pagination={false}
      />
      <>
        <ModalForm
          open={visible}
          title={createInitialValues.menuId ? '编辑菜单' : '新建菜单'}
          initialValues={createInitialValues}
          onOpenChange={setVisible}
          onFinish={async (values) => {
            console.log(values);
            let res;
            if (createInitialValues.menuId) {
              res = await update({
                ...createInitialValues,
                ...values,
              });
            } else {
              res = await create(values);
            }
            if (res) {
              message.success('操作成功');
              actionRef.current?.reload();
            }
            return res;
          }}
          modalProps={{
            destroyOnClose: true,
          }}
          layout="horizontal"
          labelCol={{ style: { width: '100px' } }}
        >
          <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
            <BetaSchemaForm layoutType="Embed" columns={editColumns as any} />
          </div>
        </ModalForm>
      </>
    </>
  );
};

export default MenuMange;
