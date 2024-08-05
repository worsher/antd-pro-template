// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 批量删除操作日志记录 批量删除操作日志记录 DELETE /system/operlog/${param0} */
export async function remove5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove5Params,
  options?: { [key: string]: any },
) {
  const { operIds: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/operlog/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 清理操作日志记录 清理操作日志记录 DELETE /system/operlog/clean */
export async function clean(options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/operlog/clean', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** 导出操作日志记录列表 导出操作日志记录列表 POST /system/operlog/export */
export async function export5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export5Params,
  options?: { [key: string]: any },
) {
  return request<any>('/system/operlog/export', {
    method: 'POST',
    params: {
      ...params,
      operLog: undefined,
      ...params['operLog'],
    },
    ...(options || {}),
  });
}

/** 获取操作日志记录列表 获取操作日志记录列表 GET /system/operlog/list */
export async function list6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list6Params,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysOperLogVo>('/system/operlog/list', {
    method: 'GET',
    params: {
      ...params,
      operLog: undefined,
      ...params['operLog'],
      pageQuery: undefined,
      ...params['pageQuery'],
    },
    ...(options || {}),
  });
}
