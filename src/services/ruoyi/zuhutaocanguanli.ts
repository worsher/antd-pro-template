// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 修改租户套餐 修改租户套餐 PUT /system/tenant/package */
export async function edit2(body: API.SysTenantPackageBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/tenant/package', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增租户套餐 新增租户套餐 POST /system/tenant/package */
export async function add2(body: API.SysTenantPackageBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/tenant/package', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取租户套餐详细信息 获取租户套餐详细信息 GET /system/tenant/package/${param0} */
export async function getInfo4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfo4Params,
  options?: { [key: string]: any },
) {
  const { packageId: param0, ...queryParams } = params;
  return request<API.RSysTenantPackageVo>(`/system/tenant/package/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除租户套餐 删除租户套餐 DELETE /system/tenant/package/${param0} */
export async function remove2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove2Params,
  options?: { [key: string]: any },
) {
  const { packageIds: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/tenant/package/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 状态修改 状态修改 PUT /system/tenant/package/changeStatus */
export async function changeStatus1(
  body: API.SysTenantPackageBo,
  options?: { [key: string]: any },
) {
  return request<API.RVoid>('/system/tenant/package/changeStatus', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出租户套餐列表 导出租户套餐列表 POST /system/tenant/package/export */
export async function export1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/system/tenant/package/export', {
    method: 'POST',
    params: {
      ...params,
      bo: undefined,
      ...params['bo'],
    },
    ...(options || {}),
  });
}

/** 查询租户套餐列表 查询租户套餐列表 GET /system/tenant/package/list */
export async function list1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list1Params,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysTenantPackageVo>('/system/tenant/package/list', {
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

/** 查询租户套餐下拉选列表 查询租户套餐下拉选列表 GET /system/tenant/package/selectList */
export async function selectList(options?: { [key: string]: any }) {
  return request<API.RListSysTenantPackageVo>('/system/tenant/package/selectList', {
    method: 'GET',
    ...(options || {}),
  });
}
