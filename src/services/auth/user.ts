import { request } from '@umijs/max';

export async function getUserInfo() {
  return request<{
    data: API.LoginVo;
  }>('/prod-api/system/user/getInfo');
}

export async function login(data: any) {
  return request('/prod-api/auth/login', {
    method: 'POST',
    data,
    isEncrypt: false,
  });
}

export async function logout() {
  return request('/prod-api/auth/logout', {
    method: 'POST',
  });
}

export async function getMenuList() {
  return request('/prod-api/system/menu/getRouters');
}
