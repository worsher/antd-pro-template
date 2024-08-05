// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 强退用户 强退用户 DELETE /system/online/${param0} */
export async function forceLogout(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.forceLogoutParams,
  options?: { [key: string]: any },
) {
  const { tokenId: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/online/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取在线用户监控列表 获取在线用户监控列表 GET /system/online/list */
export async function list7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list7Params,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysUserOnline>('/system/online/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
