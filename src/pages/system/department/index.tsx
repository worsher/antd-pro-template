import { BetaSchemaForm, ModalForm, ProTable } from '@ant-design/pro-components';
import useDepartmentColumns from './models/columns';
import useDepartmentData from './models/useData';
import { useState, useMemo, useRef } from 'react';
import { Button, message, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType } from '@ant-design/pro-components';

const SystemDepartmentManage = () => {
  const { listColumns, editColumns } = useDepartmentColumns();
  const { getList, remove, create, update } = useDepartmentData();
  const [expandKeys, setExpandKeys] = useState<any[]>([]);
  const [visible, setVisible] = useState(false);
  const [createInitialValues, setCreateInitialValues] = useState<any>({});
  const actionRef = useRef<ActionType>(null);

  const schema = useMemo(() => {
    const columns = [...listColumns];
    columns.push({
      title: '操作',
      dataIndex: 'action',
      valueType: 'option',
      render: (_: any, record: any) => [
        <Button
          key={`edit-${record.deptId}`}
          size="small"
          type="link"
          icon={<EditOutlined />}
          onClick={() => {
            setCreateInitialValues(record);
            setVisible(true);
          }}
        ></Button>,
        <Button
          key={`add-${record.deptId}`}
          size="small"
          type="link"
          icon={<PlusOutlined />}
          onClick={() => {
            setCreateInitialValues({
              parentId: record.deptId,
            });
            setVisible(true);
          }}
        ></Button>,
        <Popconfirm
          key={`delete-${record.deptId}`}
          title="确定删除吗？"
          onConfirm={async () => {
            const res = await remove(record.deptId);
            if (res) {
              message.success('操作成功');
              actionRef.current?.reload();
            }
          }}
        >
          <Button size="small" type="link" icon={<DeleteOutlined />}></Button>
        </Popconfirm>,
      ],
    });
    return columns;
  }, [listColumns]);

  return (
    <>
      <ProTable
        rowKey="deptId"
        actionRef={actionRef}
        toolBarRender={() => {
          return [
            <Button
              key="add"
              type="primary"
              onClick={() => {
                setCreateInitialValues({});
                setVisible(true);
              }}
            >
              新建部门
            </Button>,
          ];
        }}
        key={expandKeys.join(',')}
        request={async (params: any) => {
          const res = await getList(params);
          setExpandKeys(res.list.map((item: any) => item.deptId));
          return {
            data: res.data,
          };
        }}
        expandable={{
          defaultExpandedRowKeys: expandKeys,
        }}
        columns={schema as any}
      />
      <ModalForm
        modalProps={{
          destroyOnClose: true,
        }}
        layout="horizontal"
        labelCol={{ style: { width: '100px' } }}
        open={visible}
        title={createInitialValues.deptId ? '编辑部门' : '新建部门'}
        initialValues={createInitialValues}
        onOpenChange={setVisible}
        onFinish={async (values) => {
          let res;
          if (createInitialValues.deptId) {
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
      >
        <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
          <BetaSchemaForm layoutType="Embed" columns={editColumns as any} />
        </div>
      </ModalForm>
    </>
  );
};

export default SystemDepartmentManage;
