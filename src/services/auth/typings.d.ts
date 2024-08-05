declare namespace API {
  type authBindingParams = {
    /** 登录来源 */
    source: string;
    redirect_uri?: string;
  };

  type CaptchaVo = {
    /** 是否开启验证码 */
    captchaEnabled?: boolean;
    uuid?: string;
    /** 验证码图片 */
    img?: string;
  };

  type LoginBody = {
    /** 客户端id */
    clientId: string;
    /** 客户端key */
    clientKey?: string;
    /** 客户端秘钥 */
    clientSecret?: string;
    /** 授权类型 */
    grantType: string;
    /** 租户ID */
    tenantId: string;
    /** 用户名 */
    username: string;
    /** 用户密码 */
    password: string;
    /** 验证码 */
    code?: string;
    /** 唯一标识 */
    uuid?: string;
    /** 手机号 */
    phonenumber: string;
    /** 短信code */
    smsCode: string;
    /** 邮箱 */
    email: string;
    /** 邮箱code */
    emailCode: string;
    /** 小程序code */
    xcxCode: string;
    /** 第三方登录平台 */
    source: string;
    /** 第三方登录code */
    socialCode: string;
    /** 第三方登录socialState */
    socialState: string;
    redirectUri?: string;
  };

  type LoginTenantVo = {
    /** 租户开关 */
    tenantEnabled?: boolean;
    /** 租户对象列表 */
    voList?: TenantListVo[];
  };

  type LoginVo = {
    /** 令牌权限 */
    scope?: string;
    /** 用户 openid */
    openid?: string;
    access_token?: string;
    refresh_token?: string;
    expire_in?: number;
    refresh_expire_in?: number;
    client_id?: string;
  };

  type RCaptchaVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: CaptchaVo;
  };

  type RegisterBody = {
    /** 客户端id */
    clientId: string;
    /** 客户端key */
    clientKey?: string;
    /** 客户端秘钥 */
    clientSecret?: string;
    /** 授权类型 */
    grantType: string;
    /** 租户ID */
    tenantId: string;
    /** 用户名 */
    username: string;
    /** 用户密码 */
    password: string;
    /** 验证码 */
    code?: string;
    /** 唯一标识 */
    uuid?: string;
    /** 手机号 */
    phonenumber: string;
    /** 短信code */
    smsCode: string;
    /** 邮箱 */
    email: string;
    /** 邮箱code */
    emailCode: string;
    /** 小程序code */
    xcxCode: string;
    /** 第三方登录平台 */
    source: string;
    /** 第三方登录code */
    socialCode: string;
    /** 第三方登录socialState */
    socialState: string;
    redirectUri?: string;
    userType?: string;
  };

  type RLoginTenantVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: LoginTenantVo;
  };

  type RLoginVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: LoginVo;
  };

  type RString = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: string;
  };

  type RVoid = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: Record<string, any>;
  };

  type TenantListVo = {
    tenantId?: string;
    companyName?: string;
    domain?: string;
  };

  type unlockSocialParams = {
    /** socialId */
    socialId: number;
  };
}
