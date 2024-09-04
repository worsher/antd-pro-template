import { BetaSchemaForm, ModalForm, ProFormText, ProTable } from '@ant-design/pro-components';
import useUserColumns from './models/columns';
import { Button, message, Popconfirm } from 'antd';
import { useMemo, useState, useRef } from 'react';
import { DeleteOutlined, EditOutlined, LockOutlined } from '@ant-design/icons';
import useUserData from './models/useData';
import type { ActionType } from '@ant-design/pro-components';

const SystemUserManage = () => {
  const { listColumns, editColumns } = useUserColumns();
  const { getList, create, update, remove, resetPassword } = useUserData();
  const [visible, setVisible] = useState(false);
  const [editInitData, setEditInitData] = useState<any>(null);
  const actionRef = useRef<ActionType>(null);

  const schema = useMemo(() => {
    const columns = [...listColumns];
    columns.push({
      title: '操作',
      dataIndex: 'action',
      valueType: 'option',
      render: (_: any, record: any) => [
        <Button
          onClick={() => {
            setVisible(true);
            setEditInitData({
              ...record,
            });
          }}
          key={`edit-${record.userId}`}
          size="small"
          type="link"
          icon={<EditOutlined />}
        ></Button>,
        <Popconfirm
          key={`delete-${record.userId}`}
          title="确定删除吗？"
          onConfirm={async () => {
            await remove(record.userId);
            message.success('删除成功');
            actionRef.current?.reload();
          }}
        >
          <Button size="small" type="link" icon={<DeleteOutlined />}></Button>
        </Popconfirm>,
        <ModalForm
          key={`reset-${record.userId}`}
          title="重置密码"
          modalProps={{
            destroyOnClose: true,
          }}
          trigger={<Button size="small" type="link" icon={<LockOutlined />} />}
          onFinish={async (values) => {
            await resetPassword({
              ...values,
              userId: record.userId,
            });
            message.success('重置密码成功');
            actionRef.current?.reload();
            return true;
          }}
        >
          <ProFormText.Password
            fieldProps={{
              autoComplete: 'new-password',
            }}
            name="password"
            label="新密码"
            rules={[{ required: true, message: '请输入新密码' }]}
          />
        </ModalForm>,
      ],
    });
    return columns;
  }, []);
  return (
    <>
      <ProTable
        actionRef={actionRef}
        toolBarRender={() => [
          <Button
            key="create"
            type="primary"
            onClick={() => {
              setVisible(true);
              setEditInitData({});
            }}
          >
            创建用户
          </Button>,
        ]}
        columns={schema as any}
        request={getList}
      ></ProTable>
      <ModalForm
        layout="horizontal"
        labelCol={{ style: { width: '100px' } }}
        open={visible}
        onOpenChange={setVisible}
        initialValues={editInitData}
        modalProps={{
          destroyOnClose: true,
        }}
        title={editInitData ? '编辑用户' : '创建用户'}
        onFinish={async (values) => {
          let res;
          if (editInitData.userId) {
            res = await update({
              ...editInitData,
              ...values,
            });
          } else {
            res = await create(values);
          }
          if (res) {
            message.success('操作成功');
            setVisible(false);
            actionRef.current?.reload();
          }
        }}
      >
        <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
          <BetaSchemaForm layoutType="Embed" columns={editColumns as any}></BetaSchemaForm>
        </div>
      </ModalForm>
    </>
  );
};

export default SystemUserManage;
