// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 个人信息 个人信息 GET /system/user/profile */
export async function profile(options?: { [key: string]: any }) {
  return request<API.RProfileVo>('/system/user/profile', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 修改用户 修改用户 PUT /system/user/profile/ */
export async function updateProfile1(body: API.SysUserProfileBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/user/profile/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改用户 修改用户 POST /system/user/profile/ */
export async function updateProfile(body: API.SysUserProfileBo, options?: { [key: string]: any }) {
  return request<API.RVoid>('/system/user/profile/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 头像上传 头像上传 POST /system/user/profile/avatar */
export async function avatar(body: {}, avatarfile?: File, options?: { [key: string]: any }) {
  const formData = new FormData();

  if (avatarfile) {
    formData.append('avatarfile', avatarfile);
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

  return request<API.RAvatarVo>('/system/user/profile/avatar', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 重置密码 重置密码 PUT /system/user/profile/updatePwd */
export async function updatePwd1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updatePwd1Params,
  options?: { [key: string]: any },
) {
  return request<API.RVoid>('/system/user/profile/updatePwd', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 重置密码 重置密码 POST /system/user/profile/updatePwd */
export async function updatePwd(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updatePwdParams,
  options?: { [key: string]: any },
) {
  return request<API.RVoid>('/system/user/profile/updatePwd', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
