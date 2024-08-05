// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 修改客户端管理 修改客户端管理 PUT /system/client */
export async function edit11(body: API.SysClientBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/client', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增客户端管理 新增客户端管理 POST /system/client */
export async function add11(body: API.SysClientBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/client', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取客户端管理详细信息 获取客户端管理详细信息 GET /system/client/${param0} */
export async function getInfo14(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfo14Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RSysClientVo>(`/system/client/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除客户端管理 删除客户端管理 DELETE /system/client/${param0} */
export async function remove13(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove13Params,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/client/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 状态修改 状态修改 PUT /system/client/changeStatus */
export async function changeStatus4(body: API.SysClientBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/client/changeStatus', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出客户端管理列表 导出客户端管理列表 POST /system/client/export */
export async function export10(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export10Params,
  options?: { [key: string]: any },
) {
  return request<any>('/system/client/export', {
    method: 'POST',
    params: {
      ...params,
      bo: undefined,
      ...params['bo'],
    },
    ...(options || {}),
  });
}

/** 查询客户端管理列表 查询客户端管理列表 GET /system/client/list */
export async function list15(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list15Params,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysClientVo>('/system/client/list', {
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
