// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 修改部门 修改部门 PUT /system/dept */
export async function edit9(body: API.SysDeptBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/dept', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增部门 新增部门 POST /system/dept */
export async function add9(body: API.SysDeptBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/dept', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据部门编号获取详细信息 根据部门编号获取详细信息 GET /system/dept/${param0} */
export async function getInfo12(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfo12Params,
  options?: { [key: string]: any },
) {
  const { deptId: param0, ...queryParams } = params;
  return request<API.RSysDeptVo>(`/system/dept/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除部门 删除部门 DELETE /system/dept/${param0} */
export async function remove11(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.remove11Params,
  options?: { [key: string]: any },
) {
  const { deptId: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/dept/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取部门列表 获取部门列表 GET /system/dept/list */
export async function list13(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list13Params,
  options?: { [key: string]: any },
) {
  return request<API.RListSysDeptVo>('/system/dept/list', {
    method: 'GET',
    params: {
      ...params,
      dept: undefined,
      ...params['dept'],
    },
    ...(options || {}),
  });
}

/** 查询部门列表（排除节点） 查询部门列表（排除节点） GET /system/dept/list/exclude/${param0} */
export async function excludeChild(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.excludeChildParams,
  options?: { [key: string]: any },
) {
  const { deptId: param0, ...queryParams } = params;
  return request<API.RListSysDeptVo>(`/system/dept/list/exclude/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
