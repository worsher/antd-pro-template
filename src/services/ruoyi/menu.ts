import { request } from '@umijs/max';

// 获取菜单列表
export async function getMenuList(params: API.list9Params) {
  return request<API.RListSysMenuVo>('/prod-api/system/menu/list', {
    method: 'GET',
    params,
  });
}

// 新增菜单
export async function createMenu(data: API.SysMenuBo) {
  return request<API.RVoid>('/prod-api/system/menu', {
    method: 'POST',
    data,
  });
}

// 修改菜单
export async function updateMenu(data: API.SysMenuBo) {
  return request<API.RVoid>('/prod-api/system/menu', {
    method: 'PUT',
    data,
  });
}

// 删除菜单
export async function deleteMenu(data: { id: number }) {
  return request<API.RVoid>(`/prod-api/system/menu/${data.id}`, {
    method: 'DELETE',
  });
}

// 菜单查询详情
export async function getMenuDetail(id: number) {
  return request<API.RSysMenuVo>(`/prod-api/system/menu/${id}`, {
    method: 'GET',
  });
}
