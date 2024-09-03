import { getUserList } from '@/services/ruoyi/user';

function useUserData() {
  const getList = (params: API.listParams) => {
    const res = getUserList(params);
    return res;
  };
  return {
    getList,
  };
}

export default useUserData;
