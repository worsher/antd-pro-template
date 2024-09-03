import { request } from '@umijs/max';

// 用户列表
export async function getUserList(data: API.listParams) {
  return request<API.TableDataInfoSysUserVo>('/prod-api/system/user/list', {
    method: 'GET',
    params: data,
  });
}

// 创建用户
export async function createUser(data: API.SysUserBo) {
  return request<API.RVoid>('/prod-api/system/user', {
    method: 'POST',
    data,
  });
}

// 修改用户
export async function updateUser(data: API.SysUserBo) {
  return request<API.RVoid>('/prod-api/system/user', {
    method: 'PUT',
    data,
  });
}

// 删除用户
export async function deleteUser(data: API.removeParams) {
  const { userIds: param0, ...queryParams } = data;
  return request<API.RVoid>(`/prod-api/system/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
  });
}

// 获取用户详情
export async function getUserInfo(data: API.getInfo1Params) {
  const { userId: param0, ...queryParams } = data;
  return request<API.RSysUserInfoVo>(`/prod-api/system/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
  });
}
