import { request } from '@umijs/max';

/** 查询租户列表 查询租户列表 GET /system/tenant/list */
export async function getTenantList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list2Params,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysTenantVo>('/prod-api/system/tenant/list', {
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

/** 新增租户 新增租户 POST /system/tenant */
export async function createTenant(body: API.SysTenantBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/prod-api/system/tenant', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除租户 删除租户 DELETE /system/tenant/${param0} */
export async function deleteTenant(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove1Params,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<API.RVoid>(`/prod-api/system/tenant/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改租户 修改租户 PUT /system/tenant */
export async function updateTenant(body: API.SysTenantBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/prod-api/system/tenant', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
