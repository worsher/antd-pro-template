import useColumns, { OriColumnType } from '@/models/useColumns';
import { FormInstance } from 'antd';
import useUserData from './useData';

function useUserColumns() {
  const { getDeptList, getInfo } = useUserData();
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
      title: '所属部门',
      dataIndex: 'deptId',
      key: 'deptId',
      valueType: 'treeSelect',
      request: async () => {
        const res = await getDeptList();
        return res;
      },
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
    password: {
      title: '用户密码',
      dataIndex: 'password',
      key: 'password',
      valueType: 'password',
      fieldProps: {
        autoComplete: 'off',
      },
      dependencies: ['userId'],
      formItemProps: (form: FormInstance) => {
        const characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        let result = '';
        for (let i = 0; i < 12; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        if (form.getFieldValue('userId')) {
          return {
            hidden: true,
            initialValue: result,
          };
        }
        return {
          initialValue: result,
        };
      },
    },
    postIds: {
      title: '岗位',
      dataIndex: 'postIds',
      key: 'postIds',
      valueType: 'select',
    },
    roleIds: {
      title: '角色',
      dataIndex: 'roleIds',
      key: 'roleIds',
      valueType: 'select',
      dependencies: ['userId'],
      fieldProps: {
        mode: 'multiple',
      },
      request: async ({ userId }) => {
        const res = await getInfo(userId);
        const roles = res?.data?.roles || [];
        return roles.map((role: any) => ({
          label: role.roleName,
          value: role.roleId,
        }));
      },
    },
  };
  const { useCommonColumnsParse } = useColumns();
  const listKeys = ['userName', 'nickName', 'deptId', 'phonenumber', 'status', 'createTime'];
  const listColumns = useCommonColumnsParse(userColumns, listKeys, undefined, {
    search: ['userName', 'phonenumber', 'status', 'deptId'],
  });

  const editKeys = [
    'nickName',
    'deptId',
    'phonenumber',
    'email',
    'userName',
    'password',
    'sex',
    'status',
    'roleIds',
    'remark',
  ];
  const editColumns = useCommonColumnsParse(userColumns, editKeys, undefined, {
    required: ['nickName', 'deptId', 'userName', 'password', 'status'],
  });
  return {
    listColumns,
    editColumns,
  };
}

export default useUserColumns;
