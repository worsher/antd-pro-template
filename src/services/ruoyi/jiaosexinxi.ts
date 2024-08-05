// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 修改保存角色 修改保存角色 PUT /system/role */
export async function edit3(body: API.SysRoleBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/role', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增角色 新增角色 POST /system/role */
export async function add3(body: API.SysRoleBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/role', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据角色编号获取详细信息 根据角色编号获取详细信息 GET /system/role/${param0} */
export async function getInfo6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfo6Params,
  options?: { [key: string]: any },
) {
  const { roleId: param0, ...queryParams } = params;
  return request<API.RSysRoleVo>(`/system/role/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除角色 删除角色 DELETE /system/role/${param0} */
export async function remove3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove3Params,
  options?: { [key: string]: any },
) {
  const { roleIds: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/role/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询已分配用户角色列表 查询已分配用户角色列表 GET /system/role/authUser/allocatedList */
export async function allocatedList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.allocatedListParams,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysUserVo>('/system/role/authUser/allocatedList', {
    method: 'GET',
    params: {
      ...params,
      user: undefined,
      ...params['user'],
      pageQuery: undefined,
      ...params['pageQuery'],
    },
    ...(options || {}),
  });
}

/** 取消授权用户 取消授权用户 PUT /system/role/authUser/cancel */
export async function cancelAuthUser(body: API.SysUserRole, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/role/authUser/cancel', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量取消授权用户 批量取消授权用户 PUT /system/role/authUser/cancelAll */
export async function cancelAuthUserAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.cancelAuthUserAllParams,
  options?: { [key: string]: any },
) {
  return request<API.RVoid>('/system/role/authUser/cancelAll', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 批量选择用户授权 批量选择用户授权 PUT /system/role/authUser/selectAll */
export async function selectAuthUserAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.selectAuthUserAllParams,
  options?: { [key: string]: any },
) {
  return request<API.RVoid>('/system/role/authUser/selectAll', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询未分配用户角色列表 查询未分配用户角色列表 GET /system/role/authUser/unallocatedList */
export async function unallocatedList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.unallocatedListParams,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysUserVo>('/system/role/authUser/unallocatedList', {
    method: 'GET',
    params: {
      ...params,
      user: undefined,
      ...params['user'],
      pageQuery: undefined,
      ...params['pageQuery'],
    },
    ...(options || {}),
  });
}

/** 状态修改 状态修改 PUT /system/role/changeStatus */
export async function changeStatus3(body: API.SysRoleBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/role/changeStatus', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改保存数据权限 修改保存数据权限 PUT /system/role/dataScope */
export async function dataScope(body: API.SysRoleBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/role/dataScope', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取对应角色部门树列表 获取对应角色部门树列表 GET /system/role/deptTree/${param0} */
export async function roleDeptTreeselect(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.roleDeptTreeselectParams,
  options?: { [key: string]: any },
) {
  const { roleId: param0, ...queryParams } = params;
  return request<API.RDeptTreeSelectVo>(`/system/role/deptTree/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 导出角色信息列表 导出角色信息列表 POST /system/role/export */
export async function export3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export3Params,
  options?: { [key: string]: any },
) {
  return request<any>('/system/role/export', {
    method: 'POST',
    params: {
      ...params,
      role: undefined,
      ...params['role'],
    },
    ...(options || {}),
  });
}

/** 获取角色信息列表 获取角色信息列表 GET /system/role/list */
export async function list4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list4Params,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysRoleVo>('/system/role/list', {
    method: 'GET',
    params: {
      ...params,
      role: undefined,
      ...params['role'],
      pageQuery: undefined,
      ...params['pageQuery'],
    },
    ...(options || {}),
  });
}

/** 获取角色选择框列表 获取角色选择框列表 GET /system/role/optionselect */
export async function optionselect(options?: { [key: string]: any }) {
  return request<API.RListSysRoleVo>('/system/role/optionselect', {
    method: 'GET',
    ...(options || {}),
  });
}
