import { useParams, useNavigate } from '@umijs/max';
import useAuthData from './models/useData';
import { useState, useEffect } from 'react';
import { FooterToolbar, ProCard, ProForm, ProFormText, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';

const UserAuthManage = () => {
  const { userId } = useParams();
  const { getAuthByUserId, setAuthByUserId } = useAuthData();
  const [auth, setAuth] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      getAuthByUserId(userId).then(setAuth);
    }
  }, [userId]);

  const [selectedRoleIds, setSelectedRoleIds] = useState<string[]>([]);

  useEffect(() => {
    if (auth?.roles) {
      setSelectedRoleIds(
        auth?.roles?.filter((item: any) => item.flag).map((item: any) => item.roleId),
      );
    }
  }, [auth]);

  if (!userId) {
    return <></>;
  }

  const columns = [
    {
      title: '角色编号',
      dataIndex: 'roleId',
      key: 'roleId',
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
      key: 'roleName',
    },
    {
      title: '权限字符',
      dataIndex: 'roleKey',
      key: 'roleKey',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
  ];

  const handleSave = () => {
    setAuthByUserId(userId, selectedRoleIds).then(() => {
      navigate('/system/user');
    });
  };

  return (
    <>
      {selectedRoleIds.length > 0 && (
        <>
          <FooterToolbar>
            <Button type="primary" onClick={() => handleSave()}>
              保存
            </Button>
            <Button
              onClick={() => {
                navigate('/system/user');
              }}
            >
              返回
            </Button>
          </FooterToolbar>
        </>
      )}

      <ProCard title="基本信息">
        <ProForm
          layout="inline"
          params={{ user: auth?.user }}
          request={async () => {
            console.log(auth);
            return {
              ...(auth?.user || {}),
            };
          }}
          submitter={false}
        >
          <ProFormText name="nickName" label="用户昵称" readonly />
          <ProFormText name="userName" label="登录账号" readonly />
        </ProForm>
      </ProCard>

      <ProCard title="角色管理" style={{ marginTop: 10 }}>
        <ProTable
          pagination={{
            pageSize: 10,
          }}
          rowKey="roleId"
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: selectedRoleIds,
            onChange: (selectedRowKeys) => {
              setSelectedRoleIds(selectedRowKeys as string[]);
            },
          }}
          dataSource={auth?.roles}
          columns={columns}
        />
      </ProCard>
    </>
  );
};

export default UserAuthManage;
