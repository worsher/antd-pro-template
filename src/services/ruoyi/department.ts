import { request } from '@umijs/max';

export async function getDepartmentList(params: API.SysDeptBo) {
  return request<API.RListSysDeptVo>('/prod-api/system/dept/list', {
    method: 'GET',
    params,
  });
}

export async function createDepartment(data: API.SysDeptBo) {
  return request<API.RVoid>('/prod-api/system/dept', {
    method: 'POST',
    data,
  });
}

export async function updateDepartment(data: API.SysDeptBo) {
  return request<API.RVoid>('/prod-api/system/dept', {
    method: 'PUT',
    data,
  });
}

export async function deleteDepartment(params: API.remove11Params) {
  const { deptId: param0, ...queryParams } = params;
  return request<API.RVoid>(`/prod-api/system/dept/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
  });
}

export async function getDepartmentInfo(params: API.getInfo12Params) {
  const { deptId: param0, ...queryParams } = params;
  return request<API.RSysDeptVo>(`/prod-api/system/dept/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
  });
}

/** 查询部门列表（排除节点） 查询部门列表（排除节点） GET /system/dept/list/exclude/${param0} */
export async function getDepartmentListExclude(params: API.getInfo12Params) {
  const { deptId: param0, ...queryParams } = params;
  return request<API.RSysDeptVo>(`/prod-api/system/dept/list/exclude/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
  });
}
