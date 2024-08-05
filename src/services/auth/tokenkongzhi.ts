// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 第三方登录请求 第三方登录请求 GET /auth/binding/${param0} */
export async function authBinding(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.authBindingParams,
  options?: { [key: string]: any },
) {
  const { source: param0, ...queryParams } = params;
  return request<API.RString>(`/auth/binding/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 登录方法 登录方法 POST /auth/login */
export async function login(body: API.LoginBody, options?: { [key: string]: any }) {
  return request<API.RLoginVo>('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登出方法 登出方法 POST /auth/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<API.RVoid>('/auth/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 用户注册 用户注册 POST /auth/register */
export async function register(body: API.RegisterBody, options?: { [key: string]: any }) {
  return request<API.RVoid>('/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 第三方登录回调业务处理 绑定授权 第三方登录回调业务处理 绑定授权 POST /auth/social/callback */
export async function socialCallback(body: API.LoginBody, options?: { [key: string]: any }) {
  return request<API.RVoid>('/auth/social/callback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登录页面租户下拉框 登录页面租户下拉框 GET /auth/tenant/list */
export async function tenantList(options?: { [key: string]: any }) {
  return request<API.RLoginTenantVo>('/auth/tenant/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 取消授权 取消授权 DELETE /auth/unlock/${param0} */
export async function unlockSocial(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.unlockSocialParams,
  options?: { [key: string]: any },
) {
  const { socialId: param0, ...queryParams } = params;
  return request<API.RVoid>(`/auth/unlock/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
