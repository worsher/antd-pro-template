import useColumns, { OriColumnType } from '@/models/useColumns';

function useUserColumns() {
  const userColumns: Record<string, OriColumnType> = {
    userId: {
      title: '用户ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    tenantId: {
      title: '租户ID',
      dataIndex: 'tenantId',
      key: 'tenantId',
    },
    deptId: {
      title: '部门ID',
      dataIndex: 'deptId',
      key: 'deptId',
    },
    userName: {
      title: '用户账号',
      dataIndex: 'userName',
      key: 'userName',
    },
    nickName: {
      title: '用户昵称',
      dataIndex: 'nickName',
      key: 'nickName',
    },
    userType: {
      title: '用户类型',
      dataIndex: 'userType',
      key: 'userType',
    },
    email: {
      title: '用户邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    phonenumber: {
      title: '手机号码',
      dataIndex: 'phonenumber',
      key: 'phonenumber',
    },
    sex: {
      title: '用户性别',
      dataIndex: 'sex',
      key: 'sex',
      valueEnum: {
        '0': '男',
        '1': '女',
        '2': '未知',
      },
    },
    avatar: {
      title: '头像地址',
      dataIndex: 'avatar',
      key: 'avatar',
    },
    status: {
      title: '帐号状态',
      dataIndex: 'status',
      key: 'status',
      valueEnum: {
        '0': '正常',
        '1': '停用',
      },
    },
    loginIp: {
      title: '最后登录IP',
      dataIndex: 'loginIp',
      key: 'loginIp',
    },
    loginDate: {
      title: '最后登录时间',
      dataIndex: 'loginDate',
      key: 'loginDate',
    },
    remark: {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
    },
    createTime: {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
  };
  const { useCommonColumnsParse } = useColumns();
  const listKeys = [
    'userName',
    'nickName',
    'userType',
    'email',
    'phonenumber',
    'sex',
    'avatar',
    'status',
    'loginIp',
    'loginDate',
    'remark',
    'createTime',
  ];
  const listColumns = useCommonColumnsParse(userColumns, listKeys);
  return {
    listColumns,
  };
}

export default useUserColumns;
