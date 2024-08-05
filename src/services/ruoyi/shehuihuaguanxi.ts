// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取社会化关系详细信息 获取社会化关系详细信息 GET /system/social/${param0} */
export async function getInfo5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfo5Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RSysSocialVo>(`/system/social/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询社会化关系列表 查询社会化关系列表 GET /system/social/list */
export async function list3(options?: { [key: string]: any }) {
  return request<API.RListSysSocialVo>('/system/social/list', {
    method: 'GET',
    ...(options || {}),
  });
}
