import {
  getUserList,
  createUser,
  updateUser,
  deleteUser,
  getUserInfo,
  resetPwd,
} from '@/services/ruoyi/user';
import useDepartmentData from '@/pages/system/department/models/useData';

function useUserData() {
  const { getList: getDepartmenttList } = useDepartmentData();
  const getList = async (params: any) => {
    const { rows, total } = await getUserList({
      ...params,
      pageNum: params.current,
    });
    return {
      data: rows,
      total,
    };
  };

  const create = async (params: any) => {
    const res = await createUser(params);
    return res?.code === 200;
  };

  const update = async (params: any) => {
    const res = await updateUser(params);
    return res?.code === 200;
  };

  const remove = async (userIds: Array<number | string> | string | number) => {
    const res = await deleteUser({ userIds });
    return res?.code === 200;
  };

  const getInfo = async (userId?: number) => {
    const res = await getUserInfo({ userId: userId ?? '' });
    return res;
  };

  const getDeptList = async () => {
    const res = await getDepartmenttList({});
    return res?.data || [];
  };

  const resetPassword = async (params: any) => {
    const res = await resetPwd(params);
    return res?.code === 200;
  };

  return {
    getList,
    create,
    update,
    remove,
    getInfo,
    getDeptList,
    resetPassword,
  };
}

export default useUserData;
