import useRoleColumns from './models/columns';
import { BetaSchemaForm, ModalForm, ProTable, ActionType } from '@ant-design/pro-components';
import useRoleData from './models/useData';
import { useState, useRef, useMemo } from 'react';
import { Button, message, Popconfirm } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from '@umijs/max';

const SystemRoleManage = () => {
  const navigate = useNavigate();
  const { listColumns, editColumns, deptColumns } = useRoleColumns();
  const {
    getList,
    create,
    update,
    remove,
    getInfo,
    getRoleMenuTree,
    getRoleDeptTree,
    updateScope,
  } = useRoleData();
  const [visible, setVisible] = useState(false);
  const [editData, setEditData] = useState<API.SysRoleVo>({});
  const actionRef = useRef<ActionType>();

  const schema = useMemo(() => {
    const columns = [...listColumns];
    columns.push({
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      valueType: 'option',
      render: (_: any, record: any) => [
        <Button
          key={`edit-${record.roleId}`}
          type="link"
          title="编辑"
          size="small"
          icon={<EditOutlined />}
          onClick={async () => {
            let info = record.roleId ? await getInfo(record.roleId) : record;
            const menuTreeInfo = await getRoleMenuTree(info.roleId);
            info.menuIds = menuTreeInfo?.checkedKeys || [];
            setEditData(info);
            setVisible(true);
          }}
        ></Button>,
        <ModalForm
          key={`dept-${record.roleId}`}
          trigger={
            <Button
              key={`dept-trigger-${record.roleId}`}
              type="link"
              size="small"
              title="数据权限"
              icon={<UsergroupAddOutlined />}
            ></Button>
          }
          title="部门权限"
          layout="horizontal"
          labelCol={{ style: { width: '100px' } }}
          request={async () => {
            const deptTreeInfo = await getRoleDeptTree(record.roleId);
            return {
              ...record,
              deptIds: deptTreeInfo?.checkedKeys || [],
            };
          }}
          onFinish={async (values) => {
            const res = await updateScope({
              ...record,
              ...values,
            });
            if (res) {
              message.success('操作成功');
              actionRef.current?.reload();
            }
            return res;
          }}
        >
          <BetaSchemaForm layoutType="Embed" columns={deptColumns as any}></BetaSchemaForm>
        </ModalForm>,
        <Popconfirm
          key={`delete-${record.roleId}`}
          title="确定删除吗？"
          onConfirm={async () => {
            await remove(record.roleId);
            message.success('删除成功');
            actionRef.current?.reload();
          }}
        >
          <Button type="link" title="删除" size="small" icon={<DeleteOutlined />}></Button>
        </Popconfirm>,
        <Button
          key={`auth-${record.roleId}`}
          type="link"
          size="small"
          title="用户授权"
          onClick={() => {
            navigate(`/system/auth/role/${record.roleId}`);
          }}
          icon={<UserOutlined />}
        ></Button>,
      ],
    });
    return columns;
  }, [listColumns]);
  return (
    <>
      <ProTable
        rowKey="roleId"
        actionRef={actionRef}
        toolBarRender={() => [
          <Button
            key="add-role"
            type="primary"
            onClick={() => {
              setEditData({});
              setVisible(true);
            }}
          >
            新增角色
          </Button>,
        ]}
        columns={schema as any}
        request={getList}
      />
      <ModalForm
        key={`form-data-${editData?.roleId}`}
        modalProps={{
          destroyOnClose: true,
        }}
        layout="horizontal"
        labelCol={{ style: { width: '100px' } }}
        title={editData?.roleId ? '编辑角色' : '新增角色'}
        open={visible}
        onOpenChange={setVisible}
        initialValues={editData}
        onFinish={async (values) => {
          let res;
          if (editData?.roleId) {
            res = await update({
              ...editData,
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
          <BetaSchemaForm
            key={`schema-form-${editData?.roleId}`}
            layoutType="Embed"
            columns={editColumns as any}
          ></BetaSchemaForm>
        </div>
      </ModalForm>
    </>
  );
};

export default SystemRoleManage;
