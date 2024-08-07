import { LoginForm, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import Settings from '../../../../config/defaultSettings';
import { FormattedMessage, Helmet, history, useIntl, useModel } from '@umijs/max';
import { LockOutlined, SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { login } from '@/services/auth/user';
import { tenantList as getTenantList } from '@/services/auth/tokenkongzhi';
import Cookie from 'js-cookie';
import { flushSync } from 'react-dom';
import { getCode as getAuthCode } from '@/services/auth/yanzhengmacaozuochuli';
import { useEffect, useState } from 'react';

const Login = () => {
  const intl = useIntl();

  const { initialState, setInitialState } = useModel('@@initialState');
  const [captcha, setCaptcha] = useState<Auth.CaptchaVo>();
  console.log(captcha);

  const fetchCaptcha = async () => {
    const { data } = await getAuthCode();
    setCaptcha(data);
  };
  useEffect(() => {
    fetchCaptcha();
  }, []);

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const getTenantId = () => {
    if (window.location.host.indexOf('localhost') !== -1) {
      return '000000';
    }
    return !/^[0-9.]+$/.test(window.location.host) ? '160270' : '000000';
  };
  const LoginSubmit = async (values: {
    username: string;
    password: string;
    code: string;
    tenantId: string;
  }) => {
    try {
      const params = {
        // 外网默认linkAir
        tenantId: getTenantId(),
        username: values.username,
        password: values.password,
        grantType: 'password',
        clientId: 'e5cd7e4891bf95d1d19206ce24a7b32e',
        uuid: captcha?.uuid,
        code: values.code,
      };
      const { data } = await login(params);
      const { access_token } = data;
      if (access_token) {
        Cookie.set('ACCESS_TOKEN', access_token, {
          expires: 86400 * 1000,
        });
      }
      await fetchUserInfo();
      const urlParams = new URL(window.location.href).searchParams;
      history.push(urlParams.get('redirect') || '/');
      return true;
    } catch (e) {
      fetchCaptcha();
      return false;
    }
  };
  return (
    <div
      style={{
        backgroundImage:
          "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
        backgroundSize: '100% 100%',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'menu.login',
            defaultMessage: '登录页',
          })}
          - {Settings.title}
        </title>
      </Helmet>
      <div style={{ marginTop: '-10%' }}>
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          initialValues={{
            autoLogin: true,
          }}
          logo="/favicon.ico"
          title="Avatar"
          onFinish={LoginSubmit}
        >
          <Tabs
            activeKey="account"
            centered
            items={[
              {
                key: 'account',
                label: intl.formatMessage({
                  id: 'pages.login.accountLogin.tab',
                  defaultMessage: '账户密码登录',
                }),
              },
            ]}
          ></Tabs>
          <div style={{ margin: '20px' }}>
            <ProFormSelect
              name="tenantId"
              request={async () => {
                const { data: { voList = [] } = {} } = await getTenantList();
                const options = voList.map((item: any) => ({
                  label: item.companyName,
                  value: item.tenantId,
                }));
                return options;
              }}
            />
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.username.placeholder',
                defaultMessage: '用户名: admin or user',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.username.required"
                      defaultMessage="请输入用户名!"
                    />
                  ),
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.password.placeholder',
                defaultMessage: '密码: ant.design',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.password.required"
                      defaultMessage="请输入密码！"
                    />
                  ),
                },
              ]}
            />
            {captcha?.captchaEnabled && (
              <>
                <ProFormText
                  name="code"
                  fieldProps={{
                    size: 'large',
                    prefix: <SafetyCertificateOutlined />,
                    suffix: (
                      <img
                        onClick={() => fetchCaptcha()}
                        style={{ height: 30, width: 80 }}
                        src={`data:image/png;base64,${captcha?.img}`}
                        alt=""
                      />
                    ),
                  }}
                />
              </>
            )}
          </div>
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;
