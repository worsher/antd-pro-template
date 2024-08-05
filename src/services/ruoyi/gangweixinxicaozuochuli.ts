// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 修改岗位 修改岗位 PUT /system/post */
export async function edit4(body: API.SysPostBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/post', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增岗位 新增岗位 POST /system/post */
export async function add4(body: API.SysPostBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据岗位编号获取详细信息 根据岗位编号获取详细信息 GET /system/post/${param0} */
export async function getInfo7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfo7Params,
  options?: { [key: string]: any },
) {
  const { postId: param0, ...queryParams } = params;
  return request<API.RSysPostVo>(`/system/post/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除岗位 删除岗位 DELETE /system/post/${param0} */
export async function remove4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove4Params,
  options?: { [key: string]: any },
) {
  const { postIds: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/post/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 导出岗位列表 导出岗位列表 POST /system/post/export */
export async function export4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export4Params,
  options?: { [key: string]: any },
) {
  return request<any>('/system/post/export', {
    method: 'POST',
    params: {
      ...params,
      post: undefined,
      ...params['post'],
    },
    ...(options || {}),
  });
}

/** 获取岗位列表 获取岗位列表 GET /system/post/list */
export async function list5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list5Params,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysPostVo>('/system/post/list', {
    method: 'GET',
    params: {
      ...params,
      post: undefined,
      ...params['post'],
      pageQuery: undefined,
      ...params['pageQuery'],
    },
    ...(options || {}),
  });
}

/** 获取岗位选择框列表 获取岗位选择框列表 GET /system/post/optionselect */
export async function optionselect1(options?: { [key: string]: any }) {
  return request<API.RListSysPostVo>('/system/post/optionselect', {
    method: 'GET',
    ...(options || {}),
  });
}
