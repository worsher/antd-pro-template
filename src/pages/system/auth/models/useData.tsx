import {
  getUserAuthRole,
  insertAuthRole,
  unallocatedList,
  allocatedList,
  cancelAuthUser,
  cancelAuthUserAll,
  selectAuthUserAll,
} from '@/services/ruoyi/roleUserAuth';

function useAuthData() {
  const getAuthByUserId = async (userId: number | string) => {
    const { data } = await getUserAuthRole({ userId });
    console.log(data);
    return data;
  };

  const setAuthByUserId = async (userId: number | string, roleIds: any[]) => {
    const data = await insertAuthRole({ userId, roleIds: roleIds.join(',') });
    return data.code === 200;
  };

  const getUnallocatedList = async (params: any) => {
    const { rows, total } = await unallocatedList({
      ...params,
      pageNum: params.pageNum || 1,
    });
    return { data: rows, total };
  };

  const getAllocatedList = async (params: any) => {
    const { rows, total } = await allocatedList({
      ...params,
      pageNum: params.pageNum || 1,
    });
    return { data: rows, total };
  };

  const cancelAuthByUser = async (params: any) => {
    const data = await cancelAuthUser(params);
    return data.code === 200;
  };

  const cancelAuthByUserAll = async (params: any) => {
    const data = await cancelAuthUserAll(params);
    return data.code === 200;
  };

  const selectAuthUserByRoleId = async (params: any) => {
    const data = await selectAuthUserAll(params);
    return data.code === 200;
  };

  return {
    getAuthByUserId,
    setAuthByUserId,
    getUnallocatedList,
    getAllocatedList,
    cancelAuthByUser,
    cancelAuthByUserAll,
    selectAuthUserByRoleId,
  };
}

export default useAuthData;
