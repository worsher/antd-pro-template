import useColumns, { OriColumnType } from '@/models/useColumns';
import useDepartmentData from './useData';

function useDepartmentColumns() {
  const { getList } = useDepartmentData();
  const departmentColumns: Record<string, OriColumnType> = {
    deptId: {
      title: '部门ID',
      dataIndex: 'deptId',
      key: 'deptId',
    },
    parentId: {
      title: '上级部门',
      dataIndex: 'parentId',
      key: 'parentId',
      valueType: 'treeSelect',
      request: async () => {
        const res = await getList({});
        return res.data || [];
      },
    },
    parentName: {
      title: '父部门名称',
      dataIndex: 'parentName',
      key: 'parentName',
    },
    ancestors: {
      title: '祖级列表',
      dataIndex: 'ancestors',
      key: 'ancestors',
    },
    deptName: {
      title: '部门名称',
      dataIndex: 'deptName',
      key: 'deptName',
    },
    orderNum: {
      title: '显示顺序',
      dataIndex: 'orderNum',
      key: 'orderNum',
    },
    leader: {
      title: '负责人ID',
      dataIndex: 'leader',
      key: 'leader',
    },
    leaderName: {
      title: '负责人',
      dataIndex: 'leaderName',
      key: 'leaderName',
    },
    phone: {
      title: '联系电话',
      dataIndex: 'phone',
      key: 'phone',
    },
    email: {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    status: {
      title: '部门状态',
      dataIndex: 'status',
      key: 'status',
      valueEnum: {
        '0': '正常',
        '1': '停用',
      },
    },
    createTime: {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
  };

  const { useCommonColumnsParse } = useColumns();
  const listKeys = ['deptName', 'orderNum', 'status', 'createTime'];
  const listColumns = useCommonColumnsParse(departmentColumns, listKeys, undefined, {
    search: ['deptName', 'status'],
  });

  const editKeys = ['parentId', 'deptName', 'orderNum', 'leader', 'phone', 'email', 'status'];
  const editColumns = useCommonColumnsParse(departmentColumns, editKeys, undefined, {
    required: ['parentId', 'deptName', 'orderNum', 'status'],
  });
  return {
    listColumns,
    editColumns,
  };
}

export default useDepartmentColumns;
