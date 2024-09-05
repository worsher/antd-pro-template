import { request } from '@umijs/max';

export async function getRoleList(params: API.list4Params) {
  return request<API.TableDataInfoSysRoleVo>('/prod-api/system/role/list', {
    method: 'GET',
    params,
  });
}

export async function getRoleInfo(roleId: number) {
  return request<any>(`/prod-api/system/role/${roleId}`, {
    method: 'GET',
  });
}

export async function addRole(params: API.SysRoleBo) {
  return request<API.RVoid>('/prod-api/system/role', {
    method: 'POST',
    data: params,
  });
}

export async function editRole(params: API.SysRoleBo) {
  return request<API.RVoid>('/prod-api/system/role', {
    method: 'PUT',
    data: params,
  });
}

export async function deleteRole(params: API.remove3Params) {
  const { roleIds: param0, ...queryParams } = params;
  return request<API.RVoid>(`/prod-api/system/role/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
  });
}

// 获取角色对应的菜单数&&勾选的菜单
export async function getRoleMenu(roleId: number) {
  return request<API.RMenuTreeSelectVo>(`/prod-api/system/menu/roleMenuTreeselect/${roleId}`, {
    method: 'GET',
  });
}

// 获取角色对应的部门数&&勾选的部门
export async function getRoleDept(roleId: number) {
  return request<API.RDeptTreeSelectVo>(`/prod-api/system/role/deptTree/${roleId}`, {
    method: 'GET',
  });
}

/** 修改保存数据权限 修改保存数据权限 PUT /system/role/dataScope */
export async function updateDataScope(body: API.SysRoleBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/prod-api/system/role/dataScope', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
