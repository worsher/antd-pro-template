import {
  getTenantList,
  createTenant,
  deleteTenant,
  updateTenant,
  changeStatus,
} from '@/services/ruoyi/tenant';

function useTenantData(ref?: any) {
  const getList = async (params: any) => {
    const { rows, total } = await getTenantList({
      ...params,
      pageNum: params.current,
    });
    return {
      data: rows,
      total,
    };
  };

  const create = async (params: any) => {
    try {
      await createTenant(params);
      ref.current.reload();
      return true;
    } catch (e) {
      return false;
    }
  };

  const remove = async (params: any) => {
    try {
      await deleteTenant(params);
      ref.current.reload();
      return true;
    } catch (e) {
      return false;
    }
  };

  const update = async (params: any) => {
    try {
      await updateTenant(params);
      ref.current.reload();
      return true;
    } catch (e) {
      return false;
    }
  };

  const switchStatus = async (params: any) => {
    try {
      await changeStatus(params);
      ref.current.reload();
      return true;
    } catch (e) {
      return false;
    }
  };

  return { getList, create, remove, update, switchStatus };
}

export default useTenantData;
