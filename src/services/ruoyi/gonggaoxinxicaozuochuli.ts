// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 修改通知公告 修改通知公告 PUT /system/notice */
export async function edit5(body: API.SysNoticeBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/notice', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增通知公告 新增通知公告 POST /system/notice */
export async function add5(body: API.SysNoticeBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/notice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据通知公告编号获取详细信息 根据通知公告编号获取详细信息 GET /system/notice/${param0} */
export async function getInfo8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfo8Params,
  options?: { [key: string]: any },
) {
  const { noticeId: param0, ...queryParams } = params;
  return request<API.RSysNoticeVo>(`/system/notice/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除通知公告 删除通知公告 DELETE /system/notice/${param0} */
export async function remove6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove6Params,
  options?: { [key: string]: any },
) {
  const { noticeIds: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/notice/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取通知公告列表 获取通知公告列表 GET /system/notice/list */
export async function list8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list8Params,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysNoticeVo>('/system/notice/list', {
    method: 'GET',
    params: {
      ...params,
      notice: undefined,
      ...params['notice'],
      pageQuery: undefined,
      ...params['pageQuery'],
    },
    ...(options || {}),
  });
}
