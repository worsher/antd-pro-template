import { request } from '@umijs/max';

// 用户授权
export async function insertAuthRole(
  params: API.insertAuthRoleParams,
  options?: { [key: string]: any },
) {
  return request<API.RVoid>('/prod-api/system/user/authRole', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

// 根据角色ID获取用户权限
export async function getUserAuthRole(
  params: API.authRoleParams,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.RVoid>(`/prod-api/system/user/authRole/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

// 查询已分配用户列表
export async function allocatedList(
  params: API.allocatedListParams,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysUserVo>('/prod-api/system/role/authUser/allocatedList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

// 查询未分配用户列表
export async function unallocatedList(
  params: API.unallocatedListParams,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysUserVo>('/prod-api/system/role/authUser/unallocatedList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

// 取消单个用户的授权
export async function cancelAuthUser(params: API.SysUserRole, options?: { [key: string]: any }) {
  return request<API.RVoid>('/prod-api/system/role/authUser/cancel', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}

// 批量取消用户的授权
export async function cancelAuthUserAll(
  params: API.cancelAuthUserAllParams,
  options?: { [key: string]: any },
) {
  return request<API.RVoid>('/prod-api/system/role/authUser/cancelAll', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

// 批量用户授权
export async function selectAuthUserAll(
  params: API.selectAuthUserAllParams,
  options?: { [key: string]: any },
) {
  return request<API.RVoid>('/prod-api/system/role/authUser/selectAll', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
