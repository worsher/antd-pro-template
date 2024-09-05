import useColumns, { OriColumnType } from '@/models/useColumns';
import useRoleData from './useData';
import { FormInstance } from 'antd';

function useRoleColumns() {
  const { getMenuList, getDepartmentTreeList } = useRoleData();
  const roleColumns: Record<string, OriColumnType> = {
    roleId: {
      title: '角色ID',
      dataIndex: 'roleId',
      key: 'roleId',
      formItemProps: {
        hidden: true,
      },
    },
    roleName: {
      title: '角色名称',
      dataIndex: 'roleName',
      key: 'roleName',
    },
    roleKey: {
      title: '权限字符',
      dataIndex: 'roleKey',
      key: 'roleKey',
    },
    roleSort: {
      title: '显示顺序',
      dataIndex: 'roleSort',
      key: 'roleSort',
    },
    dataScope: {
      title: '数据范围',
      dataIndex: 'dataScope',
      key: 'dataScope',
      valueEnum: {
        '1': '全部数据权限',
        '2': '自定数据权限',
        '3': '本部门数据权限',
        '4': '本部门及以下数据权限',
        '5': '仅本人数据权限',
      },
    },
    menuCheckStrictly: {
      title: '父子联动',
      dataIndex: 'menuCheckStrictly',
      key: 'menuCheckStrictly',
      valueType: 'switch',
      initialValue: true,
    },
    deptCheckStrictly: {
      title: '父子联动',
      dataIndex: 'deptCheckStrictly',
      key: 'deptCheckStrictly',
      valueType: 'switch',
      initialValue: true,
      dependencies: ['dataScope'],
      formItemProps: (form) => {
        return {
          hidden: form.getFieldValue('dataScope') !== '2',
        };
      },
    },
    status: {
      title: '角色状态',
      dataIndex: 'status',
      key: 'status',
      valueEnum: {
        '0': '正常',
        '1': '停用',
      },
    },
    remark: {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
    },
    menuIds: {
      title: '菜单权限',
      dataIndex: 'menuIds',
      key: 'menuIds',
      valueType: 'treeSelect',
      dependencies: ['menuCheckStrictly', 'roleId'],
      fieldProps: (form: FormInstance) => {
        return {
          treeCheckStrictly: !form.getFieldValue('menuCheckStrictly'),
          treeCheckable: true,
          multiple: true,
        };
      },
      request: async () => {
        const data = await getMenuList();
        return data || [];
      },
    },
    deptIds: {
      title: '部门权限',
      dataIndex: 'deptIds',
      key: 'deptIds',
      valueType: 'treeSelect',
      dependencies: ['dataScope', 'deptCheckStrictly'],
      formItemProps: (form) => {
        return {
          hidden: form.getFieldValue('dataScope') !== '2',
        };
      },
      fieldProps: (form: FormInstance) => {
        return {
          treeCheckStrictly: !form.getFieldValue('deptCheckStrictly'),
          treeCheckable: true,
          multiple: true,
        };
      },
      request: async () => {
        const data = await getDepartmentTreeList();
        return data || [];
      },
    },
    superAdmin: {
      title: '超级管理员',
      dataIndex: 'superAdmin',
      key: 'superAdmin',
      valueType: 'switch',
    },
  };

  const listKeys = ['roleName', 'roleKey', 'roleSort', 'status', 'remark', 'createTime'];
  const { useCommonColumnsParse } = useColumns();
  const listColumns = useCommonColumnsParse(roleColumns, listKeys, undefined, {
    search: ['roleName', 'roleKey', 'status'],
  });

  const editKeys = [
    'roleId',
    'roleName',
    'roleKey',
    'roleSort',
    'status',
    'menuCheckStrictly',
    'menuIds',
    'remark',
  ];
  const editColumns = useCommonColumnsParse(roleColumns, editKeys, undefined, {
    required: ['roleName', 'roleKey', 'roleSort', 'status'],
  });

  const deptKeys = ['roleName', 'roleKey', 'dataScope', 'deptCheckStrictly', 'deptIds'];
  const deptColumns = useCommonColumnsParse(roleColumns, deptKeys, undefined, {
    readonly: ['roleName', 'roleKey'],
  });
  return {
    listColumns,
    editColumns,
    deptColumns,
  };
}
export default useRoleColumns;
