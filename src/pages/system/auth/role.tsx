import { ActionType, ProTable } from '@ant-design/pro-components';
import useData from './models/useData';
import { Button, message, Popconfirm } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useParams } from '@umijs/max';
import { useState, useRef, useMemo } from 'react';
import RoleSelectUserModel from './components/RoleSelectUserModel';

const RoleAuthManage = () => {
  const { roleId } = useParams();
  const { getAllocatedList, cancelAuthByUser, cancelAuthByUserAll, selectAuthUserByRoleId } =
    useData();
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const actionRef = useRef<ActionType>(null);

  const columns = [
    {
      title: '用户名称',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '用户昵称',
      dataIndex: 'nickName',
      key: 'nickName',
      hideInSearch: true,
    },
    {
      title: '手机号码',
      dataIndex: 'phonenumber',
      key: 'phonenumber',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      hideInSearch: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      valueType: 'select',
      valueEnum: {
        0: { text: '正常' },
        1: { text: '禁用' },
      },
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      hideInSearch: true,
    },
  ];

  const shecma = useMemo(() => {
    const schema: any[] = [...columns];
    schema.push({
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      valueType: 'option',
      render: (_: any, record: any) => [
        <Popconfirm
          key={`cancel-${record.userId}`}
          title="确定要取消授权吗？"
          onConfirm={async () => {
            await cancelAuthByUser({ roleId, userId: record.userId });
            message.success('取消授权成功');
            actionRef.current?.reload();
          }}
        >
          <Button type="link" size="small" icon={<CloseCircleOutlined />}></Button>
        </Popconfirm>,
      ],
    });
    return schema;
  }, [columns]);
  return (
    <>
      <ProTable
        toolBarRender={() => [
          <RoleSelectUserModel
            key={`${roleId}-select-user`}
            columns={columns}
            roleId={roleId}
            trigger={
              <Button key="add" type="primary">
                选择用户
              </Button>
            }
            onOk={async (formData: any) => {
              await selectAuthUserByRoleId({ roleId, userIds: formData.join(',') });
              message.success('批量授权成功');
              actionRef.current?.reload();
            }}
          />,
          <Button
            disabled={selectedUserIds.length === 0}
            key="mutil-cancel"
            type="primary"
            onClick={async () => {
              await cancelAuthByUserAll({ roleId, userIds: selectedUserIds.toString() });
              message.success('批量取消授权成功');
              actionRef.current?.reload();
            }}
          >
            批量取消授权
          </Button>,
        ]}
        rowKey="userId"
        actionRef={actionRef}
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys: selectedUserIds,
          onChange: (selectedRowKeys) => {
            setSelectedUserIds(selectedRowKeys as string[]);
          },
        }}
        params={{ roleId }}
        columns={shecma}
        request={getAllocatedList}
      />
    </>
  );
};

export default RoleAuthManage;
