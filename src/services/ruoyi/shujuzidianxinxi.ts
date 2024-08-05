// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 修改保存字典类型 修改保存字典类型 PUT /system/dict/data */
export async function edit8(body: API.SysDictDataBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/dict/data', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增字典类型 新增字典类型 POST /system/dict/data */
export async function add8(body: API.SysDictDataBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/dict/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询字典数据详细 查询字典数据详细 GET /system/dict/data/${param0} */
export async function getInfo11(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfo11Params,
  options?: { [key: string]: any },
) {
  const { dictCode: param0, ...queryParams } = params;
  return request<API.RSysDictDataVo>(`/system/dict/data/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除字典类型 删除字典类型 DELETE /system/dict/data/${param0} */
export async function remove10(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove10Params,
  options?: { [key: string]: any },
) {
  const { dictCodes: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/dict/data/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 导出字典数据列表 导出字典数据列表 POST /system/dict/data/export */
export async function export8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export8Params,
  options?: { [key: string]: any },
) {
  return request<any>('/system/dict/data/export', {
    method: 'POST',
    params: {
      ...params,
      dictData: undefined,
      ...params['dictData'],
    },
    ...(options || {}),
  });
}

/** 查询字典数据列表 查询字典数据列表 GET /system/dict/data/list */
export async function list12(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list12Params,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysDictDataVo>('/system/dict/data/list', {
    method: 'GET',
    params: {
      ...params,
      dictData: undefined,
      ...params['dictData'],
      pageQuery: undefined,
      ...params['pageQuery'],
    },
    ...(options || {}),
  });
}

/** 根据字典类型查询字典数据信息 根据字典类型查询字典数据信息 GET /system/dict/data/type/${param0} */
export async function dictType(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.dictTypeParams,
  options?: { [key: string]: any },
) {
  const { dictType: param0, ...queryParams } = params;
  return request<API.RListSysDictDataVo>(`/system/dict/data/type/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改字典类型 修改字典类型 PUT /system/dict/type */
export async function edit7(body: API.SysDictTypeBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/dict/type', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增字典类型 新增字典类型 POST /system/dict/type */
export async function add7(body: API.SysDictTypeBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/dict/type', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询字典类型详细 查询字典类型详细 GET /system/dict/type/${param0} */
export async function getInfo10(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfo10Params,
  options?: { [key: string]: any },
) {
  const { dictId: param0, ...queryParams } = params;
  return request<API.RSysDictTypeVo>(`/system/dict/type/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除字典类型 删除字典类型 DELETE /system/dict/type/${param0} */
export async function remove9(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove9Params,
  options?: { [key: string]: any },
) {
  const { dictIds: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/dict/type/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 导出字典类型列表 导出字典类型列表 POST /system/dict/type/export */
export async function export7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export7Params,
  options?: { [key: string]: any },
) {
  return request<any>('/system/dict/type/export', {
    method: 'POST',
    params: {
      ...params,
      dictType: undefined,
      ...params['dictType'],
    },
    ...(options || {}),
  });
}

/** 查询字典类型列表 查询字典类型列表 GET /system/dict/type/list */
export async function list11(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list11Params,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysDictTypeVo>('/system/dict/type/list', {
    method: 'GET',
    params: {
      ...params,
      dictType: undefined,
      ...params['dictType'],
      pageQuery: undefined,
      ...params['pageQuery'],
    },
    ...(options || {}),
  });
}

/** 获取字典选择框列表 获取字典选择框列表 GET /system/dict/type/optionselect */
export async function optionselect2(options?: { [key: string]: any }) {
  return request<API.RListSysDictTypeVo>('/system/dict/type/optionselect', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 刷新字典缓存 刷新字典缓存 DELETE /system/dict/type/refreshCache */
export async function refreshCache(options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/dict/type/refreshCache', {
    method: 'DELETE',
    ...(options || {}),
  });
}
