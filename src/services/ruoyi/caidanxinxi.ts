// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 修改菜单 修改菜单 PUT /system/menu */
export async function edit6(body: API.SysMenuBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/menu', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增菜单 新增菜单 POST /system/menu */
export async function add6(body: API.SysMenuBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/menu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据菜单编号获取详细信息 根据菜单编号获取详细信息 GET /system/menu/${param0} */
export async function getInfo9(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfo9Params,
  options?: { [key: string]: any },
) {
  const { menuId: param0, ...queryParams } = params;
  return request<API.RSysMenuVo>(`/system/menu/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除菜单 删除菜单 DELETE /system/menu/${param0} */
export async function remove7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove7Params,
  options?: { [key: string]: any },
) {
  const { menuId: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/menu/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取路由信息 获取路由信息 GET /system/menu/getRouters */
export async function getRouters(options?: { [key: string]: any }) {
  return request<API.RListRouterVo>('/system/menu/getRouters', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取菜单列表 获取菜单列表 GET /system/menu/list */
export async function list9(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list9Params,
  options?: { [key: string]: any },
) {
  return request<API.RListSysMenuVo>('/system/menu/list', {
    method: 'GET',
    params: {
      ...params,
      menu: undefined,
      ...params['menu'],
    },
    ...(options || {}),
  });
}

/** 加载对应角色菜单列表树 加载对应角色菜单列表树 GET /system/menu/roleMenuTreeselect/${param0} */
export async function roleMenuTreeselect(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.roleMenuTreeselectParams,
  options?: { [key: string]: any },
) {
  const { roleId: param0, ...queryParams } = params;
  return request<API.RMenuTreeSelectVo>(`/system/menu/roleMenuTreeselect/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 加载对应租户套餐菜单列表树 加载对应租户套餐菜单列表树 GET /system/menu/tenantPackageMenuTreeselect/${param0} */
export async function tenantPackageMenuTreeselect(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tenantPackageMenuTreeselectParams,
  options?: { [key: string]: any },
) {
  const { packageId: param0, ...queryParams } = params;
  return request<API.RMenuTreeSelectVo>(`/system/menu/tenantPackageMenuTreeselect/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取菜单下拉树列表 获取菜单下拉树列表 GET /system/menu/treeselect */
export async function treeselect(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.treeselectParams,
  options?: { [key: string]: any },
) {
  return request<API.RListTreeLong>('/system/menu/treeselect', {
    method: 'GET',
    params: {
      ...params,
      menu: undefined,
      ...params['menu'],
    },
    ...(options || {}),
  });
}
