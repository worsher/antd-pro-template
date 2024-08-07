// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 生成验证码 生成验证码 GET /auth/code */
export async function getCode(options?: { [key: string]: any }) {
  return request<API.RCaptchaVo>('/prod-api/auth/code', {
    method: 'GET',
    ...(options || {}),
  });
}
