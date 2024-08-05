// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 修改参数配置 修改参数配置 PUT /system/config */
export async function edit10(body: API.SysConfigBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/config', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增参数配置 新增参数配置 POST /system/config */
export async function add10(body: API.SysConfigBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据参数编号获取详细信息 根据参数编号获取详细信息 GET /system/config/${param0} */
export async function getInfo13(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfo13Params,
  options?: { [key: string]: any },
) {
  const { configId: param0, ...queryParams } = params;
  return request<API.RSysConfigVo>(`/system/config/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除参数配置 删除参数配置 DELETE /system/config/${param0} */
export async function remove12(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove12Params,
  options?: { [key: string]: any },
) {
  const { configIds: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/config/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据参数键名查询参数值 根据参数键名查询参数值 GET /system/config/configKey/${param0} */
export async function getConfigKey(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getConfigKeyParams,
  options?: { [key: string]: any },
) {
  const { configKey: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/config/configKey/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 导出参数配置列表 导出参数配置列表 POST /system/config/export */
export async function export9(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export9Params,
  options?: { [key: string]: any },
) {
  return request<any>('/system/config/export', {
    method: 'POST',
    params: {
      ...params,
      config: undefined,
      ...params['config'],
    },
    ...(options || {}),
  });
}

/** 获取参数配置列表 获取参数配置列表 GET /system/config/list */
export async function list14(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list14Params,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysConfigVo>('/system/config/list', {
    method: 'GET',
    params: {
      ...params,
      config: undefined,
      ...params['config'],
      pageQuery: undefined,
      ...params['pageQuery'],
    },
    ...(options || {}),
  });
}

/** 刷新参数缓存 刷新参数缓存 DELETE /system/config/refreshCache */
export async function refreshCache1(options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/config/refreshCache', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** 根据参数键名修改参数配置 根据参数键名修改参数配置 PUT /system/config/updateByKey */
export async function updateByKey(body: API.SysConfigBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/config/updateByKey', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
