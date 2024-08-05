// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 批量删除登录日志 批量删除登录日志 DELETE /system/logininfor/${param0} */
export async function remove8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove8Params,
  options?: { [key: string]: any },
) {
  const { infoIds: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/logininfor/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 清理系统访问记录 清理系统访问记录 DELETE /system/logininfor/clean */
export async function clean1(options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/logininfor/clean', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** 导出系统访问记录列表 导出系统访问记录列表 POST /system/logininfor/export */
export async function export6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export6Params,
  options?: { [key: string]: any },
) {
  return request<any>('/system/logininfor/export', {
    method: 'POST',
    params: {
      ...params,
      logininfor: undefined,
      ...params['logininfor'],
    },
    ...(options || {}),
  });
}

/** 获取系统访问记录列表 获取系统访问记录列表 GET /system/logininfor/list */
export async function list10(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list10Params,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysLogininforVo>('/system/logininfor/list', {
    method: 'GET',
    params: {
      ...params,
      logininfor: undefined,
      ...params['logininfor'],
      pageQuery: undefined,
      ...params['pageQuery'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /system/logininfor/unlock/${param0} */
export async function unlock(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.unlockParams,
  options?: { [key: string]: any },
) {
  const { userName: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/logininfor/unlock/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
