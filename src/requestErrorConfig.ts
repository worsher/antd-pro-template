import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
import { message } from 'antd';
import Cookies from 'js-cookie';
import { history } from '@umijs/max';
import { encryptBase64, encryptWithAes, generateAesKey } from './utils/crypto';
import { encrypt } from './utils/jsEncrypt';

// 错误处理方案： 错误类型
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// 与后端约定的响应数据格式
interface ResponseStructure {
  success: boolean;
  config: Record<string, any>;
  data: any;
  code?: number;
  msg?: string;
  showType?: ErrorShowType;
}

const encryptHeader = 'encrypt-key';

/**
 * @name 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const errorConfig: RequestConfig = {
  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      // 拦截请求配置，进行个性化处理。
      const headers = config?.headers || {};
      headers['Authorization'] = 'Bearer ' + (Cookies.get('ACCESS_TOKEN') || '');
      headers['Clientid'] = 'e5cd7e4891bf95d1d19206ce24a7b32e';
      // 需要加密传输的
      if (config.isEncrypt) {
        const aesKey = generateAesKey();
        config.headers[encryptHeader] = encrypt(encryptBase64(aesKey));
        config.data =
          typeof config.data === 'object'
            ? encryptWithAes(JSON.stringify(config.data), aesKey)
            : encryptWithAes(config.data, aesKey);
      }
      return { ...config, headers };
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      // 拦截响应数据，进行个性化处理
      const { data: source, config } = response;
      const { code, msg } = source as ResponseStructure;
      const { errorHandle = true } = config as any;
      if (code && code !== 200 && msg) {
        if (code === 401) {
          message.error('登录失效，请重新登录');
          history.push('/user/login?redirect=' + encodeURIComponent(window.location.pathname));
        } else if (errorHandle && msg) {
          message.error(msg);
          throw new Error(msg);
        }
      }
      return response;
    },
  ],
};
