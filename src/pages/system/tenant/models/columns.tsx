import useColumns from '@/models/useColumns';
import type { OriColumnType } from '@/models/useColumns';
import { ProColumns, ProFormColumnsType } from '@ant-design/pro-components';
import { FormInstance, Switch } from 'antd';
import { treeselect } from '@/services/ruoyi/tenantManage';
import { getTenantPackageSelectList } from '@/services/ruoyi/tenantManage';

// const titlePre = "tenant";
// 租户的字段配置
const TenantColumns: Record<string, OriColumnType> = {
  id: {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  tenantId: {
    title: '租户编号',
    dataIndex: 'tenantId',
    key: 'tenantId',
  },
  contactUserName: {
    title: '联系人',
    dataIndex: 'contactUserName',
    key: 'contactUserName',
  },
  contactPhone: {
    title: '联系电话',
    dataIndex: 'contactPhone',
    key: 'contactPhone',
  },
  username: {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },
  password: {
    title: '用户密码',
    dataIndex: 'password',
    key: 'password',
  },
  packageId: {
    title: '租户套餐',
    dataIndex: 'packageId',
    key: 'packageId',
    fieldProps: (form: FormInstance) => {
      return {
        disabled: form.getFieldValue('id'),
      };
    },
    valueType: 'select',
    request: async () => {
      const res = await getTenantPackageSelectList();
      return (
        res.data?.map((item: any) => ({
          label: item.packageName,
          value: item.packageId,
        })) || []
      );
    },
  },
  companyName: {
    title: '企业名称',
    dataIndex: 'companyName',
    key: 'companyName',
  },
  address: {
    title: '企业地址',
    dataIndex: 'address',
    key: 'address',
  },
  domain: {
    title: '绑定域名',
    dataIndex: 'domain',
    key: 'domain',
  },
  intro: {
    title: '企业简介',
    dataIndex: 'intro',
    key: 'intro',
  },
  remark: {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
  },
  expireTime: {
    title: '过期时间',
    dataIndex: 'expireTime',
    key: 'expireTime',
    valueType: 'date',
  },
  accountCount: {
    title: '用户数量',
    dataIndex: 'accountCount',
    key: 'accountCount',
  },
  status: {
    title: '租户状态',
    dataIndex: 'status',
    key: 'status',
    valueType: 'switch',
    render: (_: any, record: any) => {
      return <Switch checked={record.status === '0'} />;
    },
  },
};

const menusDataTransform = (data: any[]): { label: string; value: string; children?: any[] }[] => {
  if (!data) return [];
  return data.map((item: { label: string; id: string; children?: any[] }) => {
    if (item.children) {
      return {
        label: item.label,
        value: String(item.id),
        children: menusDataTransform(item.children),
      };
    }
    return {
      label: item.label,
      value: String(item.id),
    };
  });
};
// 租户套餐的字段配置
const TenantPackageColumns: Record<string, OriColumnType> = {
  packageId: {
    title: '套餐id',
    dataIndex: 'packageId',
    key: 'packageId',
  },
  packageName: {
    title: '套餐名称',
    dataIndex: 'packageName',
    key: 'packageName',
  },
  menuIds: {
    title: '关联菜单',
    dataIndex: 'menuIds',
    key: 'menuIds',
  },
  remark: {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
  },
  menuCheckStrictly: {
    title: '父子联动',
    dataIndex: 'menuCheckStrictly',
    key: 'menuCheckStrictly',
    valueType: 'switch',
    render: (_: any, record: any) => {
      return <Switch checked={record.menuCheckStrictly} />;
    },
  },
  menus: {
    title: '关联菜单',
    dataIndex: 'menuIds',
    key: 'menuIds',
    valueType: 'treeSelect',
    dependencies: ['menuCheckStrictly'],
    fieldProps: (form: FormInstance) => {
      return {
        treeCheckable: true,
        treeCheckStrictly: !form.getFieldValue('menuCheckStrictly'),
      };
    },
    request: async () => {
      const res = await treeselect();
      return menusDataTransform(res.data as any[]);
    },
  },
  status: {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    valueType: 'switch',
    render: (_: any, record: any) => {
      return <Switch checked={record.status === '0'} />;
    },
  },
};

function useTenantColumns() {
  const { useCommonColumnsParse } = useColumns();
  // table配置
  const listKeys = [
    'tenantId',
    'contactUserName',
    'contactPhone',
    'companyName',
    'expireTime',
    'status',
  ];
  const listColumns: ProColumns[] = useCommonColumnsParse(TenantColumns, listKeys, undefined, {
    search: ['tenantId', 'contactUserName', 'contactPhone', 'companyName'],
  }) as ProColumns[];

  // 表单配置
  const createKeys = [
    'companyName',
    'contactUserName',
    'contactPhone',
    'username',
    'password',
    'packageId',
    'expireTime',
    'accountCount',
    'domain',
    'remark',
  ];

  const editKeys = [
    'companyName',
    'contactUserName',
    'contactPhone',
    'packageId',
    'expireTime',
    'accountCount',
    'domain',
    'remark',
  ];
  const createColumns: ProFormColumnsType[] = useCommonColumnsParse(
    TenantColumns,
    createKeys,
    undefined,
    {
      required: [
        'contactUserName',
        'contactPhone',
        'companyName',
        'username',
        'password',
        'packageId',
      ],
    },
  ) as ProFormColumnsType[];

  const editColumns: ProFormColumnsType[] = useCommonColumnsParse(
    TenantColumns,
    editKeys,
    undefined,
    {
      required: [
        'contactUserName',
        'contactPhone',
        'companyName',
        'username',
        'password',
        'packageId',
      ],
    },
  ) as ProFormColumnsType[];

  const packageListKeys = ['packageName', 'remark', 'status'];
  const packageListColumns: ProColumns[] = useCommonColumnsParse(
    TenantPackageColumns,
    packageListKeys,
    undefined,
    {
      search: ['packageName'],
    },
  ) as ProColumns[];

  const packageCreateKeys = ['packageName', 'remark', 'menuCheckStrictly', 'menus'];
  const packageCreateColumns: ProFormColumnsType[] = useCommonColumnsParse(
    TenantPackageColumns,
    packageCreateKeys,
    undefined,
    {
      required: ['packageName'],
    },
  ) as ProFormColumnsType[];

  return { listColumns, createColumns, editColumns, packageListColumns, packageCreateColumns };
}

export default useTenantColumns;
