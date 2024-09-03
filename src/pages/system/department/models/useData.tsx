import {
  getDepartmentList,
  deleteDepartment,
  updateDepartment,
  createDepartment,
  getDepartmentInfo,
} from '@/services/ruoyi/department';
import { groupBy } from 'lodash';

function useDepartmentData() {
  const buildDeptTree = (items: any[], parentId?: number | null): any[] => {
    const curDept = items.filter((item: any) => item.parentId === parentId);
    const deptGroup = groupBy(items, 'parentId');
    return curDept.map((item: any) => {
      const nItem = {
        ...item,
        key: item.deptId,
        title: item.deptName,
        value: item.deptId,
        label: item.deptName,
        children: deptGroup[item.deptId] ? buildDeptTree(items, item.deptId) : null,
      };
      return nItem;
    });
  };
  const getList = async (params: any) => {
    const res = await getDepartmentList({
      ...params,
      pageNum: params.current,
      pageSize: params.pageSize,
    });

    return {
      data: buildDeptTree(res.data || [], 0),
      list: res.data || [],
    };
  };

  const remove = async (id: number) => {
    const res = await deleteDepartment({ deptId: id });
    return res?.code === 200;
  };

  const create = async (data: any) => {
    const res = await createDepartment(data);
    return res?.code === 200;
  };

  const update = async (data: any) => {
    const res = await updateDepartment(data);
    return res?.code === 200;
  };

  const getInfo = async (id: number) => {
    const res = await getDepartmentInfo({ deptId: id });
    return res?.data || {};
  };
  return {
    getList,
    remove,
    create,
    update,
    getInfo,
  };
}

export default useDepartmentData;
