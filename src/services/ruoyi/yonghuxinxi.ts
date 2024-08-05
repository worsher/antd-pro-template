// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 修改用户 修改用户 PUT /system/user */
export async function edit(body: API.SysUserBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/user', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增用户 新增用户 POST /system/user */
export async function add(body: API.SysUserBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据用户编号获取详细信息 根据用户编号获取详细信息 GET /system/user/ */
export async function getInfo2(options?: { [key: string]: any }) {
  return request<API.RSysUserInfoVo>('/system/user/', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据用户编号获取详细信息 根据用户编号获取详细信息 GET /system/user/${param0} */
export async function getInfo1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfo1Params,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.RSysUserInfoVo>(`/system/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除用户 删除用户 DELETE /system/user/${param0} */
export async function remove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeParams,
  options?: { [key: string]: any },
) {
  const { userIds: param0, ...queryParams } = params;
  return request<API.RVoid>(`/system/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 用户授权角色 用户授权角色 PUT /system/user/authRole */
export async function insertAuthRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.insertAuthRoleParams,
  options?: { [key: string]: any },
) {
  return request<API.RVoid>('/system/user/authRole', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据用户编号获取授权角色 根据用户编号获取授权角色 GET /system/user/authRole/${param0} */
export async function authRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.authRoleParams,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.RSysUserInfoVo>(`/system/user/authRole/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 状态修改 状态修改 PUT /system/user/changeStatus */
export async function changeStatus(body: API.SysUserBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/user/changeStatus', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取部门树列表 获取部门树列表 GET /system/user/deptTree */
export async function deptTree(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deptTreeParams,
  options?: { [key: string]: any },
) {
  return request<API.RListTreeLong>('/system/user/deptTree', {
    method: 'GET',
    params: {
      ...params,
      dept: undefined,
      ...params['dept'],
    },
    ...(options || {}),
  });
}

/** 导出用户列表 导出用户列表 POST /system/user/export */
export async function exportUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/system/user/export', {
    method: 'POST',
    params: {
      ...params,
      user: undefined,
      ...params['user'],
    },
    ...(options || {}),
  });
}

/** 获取用户信息 获取用户信息 GET /system/user/getInfo */
export async function getInfo(options?: { [key: string]: any }) {
  return request<API.RUserInfoVo>('/system/user/getInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 导入数据 导入数据 POST /system/user/importData */
export async function importData(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.importDataParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.RVoid>('/system/user/importData', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 获取导入模板 获取导入模板 POST /system/user/importTemplate */
export async function importTemplate(options?: { [key: string]: any }) {
  return request<any>('/system/user/importTemplate', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取用户列表 获取用户列表 GET /system/user/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listParams,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysUserVo>('/system/user/list', {
    method: 'GET',
    params: {
      ...params,
      user: undefined,
      ...params['user'],
      pageQuery: undefined,
      ...params['pageQuery'],
    },
    ...(options || {}),
  });
}

/** 获取部门下的所有用户信息 获取部门下的所有用户信息 GET /system/user/list/dept/${param0} */
export async function listByDept(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listByDeptParams,
  options?: { [key: string]: any },
) {
  const { deptId: param0, ...queryParams } = params;
  return request<API.RListSysUserVo>(`/system/user/list/dept/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 重置密码 重置密码 PUT /system/user/resetPwd */
export async function resetPwd(body: API.SysUserBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/user/resetPwd', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
