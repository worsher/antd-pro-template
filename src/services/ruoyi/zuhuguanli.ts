// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 修改租户 修改租户 PUT /system/tenant */
export async function edit1(body: API.SysTenantBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/tenant', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增租户 新增租户 POST /system/tenant */
export async function add1(body: API.SysTenantBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/tenant', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取租户详细信息 获取租户详细信息 GET /system/tenant/${param0} */
export async function getInfo3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfo3Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RSysTenantVo>(`/system/tenant/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除租户 删除租户 DELETE /system/tenant/${param0} */
export async function remove1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove1Params,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/tenant/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 状态修改 状态修改 PUT /system/tenant/changeStatus */
export async function changeStatus2(body: API.SysTenantBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/tenant/changeStatus', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 动态切换租户 动态切换租户 GET /system/tenant/dynamic/${param0} */
export async function dynamicTenant(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.dynamicTenantParams,
  options?: { [key: string]: any },
) {
  const { tenantId: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/tenant/dynamic/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 清除动态租户 清除动态租户 GET /system/tenant/dynamic/clear */
export async function dynamicClear(options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/tenant/dynamic/clear', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 导出租户列表 导出租户列表 POST /system/tenant/export */
export async function export2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export2Params,
  options?: { [key: string]: any },
) {
  return request<any>('/system/tenant/export', {
    method: 'POST',
    params: {
      ...params,
      bo: undefined,
      ...params['bo'],
    },
    ...(options || {}),
  });
}

/** 查询租户列表 查询租户列表 GET /system/tenant/list */
export async function list2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list2Params,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysTenantVo>('/system/tenant/list', {
    method: 'GET',
    params: {
      ...params,
      bo: undefined,
      ...params['bo'],
      pageQuery: undefined,
      ...params['pageQuery'],
    },
    ...(options || {}),
  });
}

/** 同步租户套餐 同步租户套餐 GET /system/tenant/syncTenantPackage */
export async function syncTenantPackage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.syncTenantPackageParams,
  options?: { [key: string]: any },
) {
  return request<API.RVoid>('/system/tenant/syncTenantPackage', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
