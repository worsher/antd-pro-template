import {
  getRoleList,
  editRole,
  deleteRole,
  addRole,
  getRoleInfo,
  getRoleMenu,
  getRoleDept,
  updateDataScope,
} from '@/services/ruoyi/role';
import { treeselect } from '@/services/ruoyi/tenantManage';
import useDepartmentData from '../../department/models/useData';

function useRoleData() {
  const { getList: getDepartmentList } = useDepartmentData();
  const getList = async (params: any) => {
    const { rows, total } = await getRoleList({
      ...params,
      pageNum: params.current,
    });
    return {
      data: rows,
      total,
    };
  };

  const handleMenuList = (data: any[]): any[] => {
    return (
      data?.map((item) => ({
        value: item.id,
        key: item.id,
        label: item.label,
        children: item.children ? handleMenuList(item.children) : null,
      })) || []
    );
  };
  const getMenuList = async () => {
    const { data } = await treeselect();
    return handleMenuList(data || []);
  };

  const getDepartmentTreeList = async () => {
    const { data } = await getDepartmentList({});
    return data || [];
  };

  const create = async (params: any) => {
    const res = await addRole(params);
    return res?.code === 200;
  };

  const update = async (params: any) => {
    const res = await editRole(params);
    return res?.code === 200;
  };

  const remove = async (params: any) => {
    const res = await deleteRole({ roleIds: params });
    return res?.code === 200;
  };

  const getInfo = async (roleId: number) => {
    const { data } = await getRoleInfo(roleId);
    return data;
  };

  const getRoleMenuTree = async (roleId: number) => {
    const { data } = await getRoleMenu(roleId);
    return data;
  };

  const getRoleDeptTree = async (roleId: number) => {
    const { data } = await getRoleDept(roleId);
    return data;
  };

  const updateScope = async (params: any) => {
    const res = await updateDataScope(params);
    return res?.code === 200;
  };
  return {
    getList,
    getMenuList,
    create,
    update,
    remove,
    getInfo,
    getDepartmentTreeList,
    getRoleMenuTree,
    getRoleDeptTree,
    updateScope,
  };
}

export default useRoleData;
