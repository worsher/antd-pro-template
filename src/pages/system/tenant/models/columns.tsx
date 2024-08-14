import useColumns from '@/models/useColumns';
import type { OriColumnType } from '@/models/useColumns';
import { ProColumns, ProFormColumnsType } from '@ant-design/pro-components';
import { Switch } from 'antd';

// const titlePre = "tenant";
const oriColumns: Record<string, OriColumnType> = {
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
  packageId: {
    title: '租户套餐编号',
    dataIndex: 'packageId',
    key: 'packageId',
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
  const listColumns: ProColumns[] = useCommonColumnsParse(oriColumns, listKeys, undefined, {
    search: ['tenantId', 'contactUserName', 'contactPhone', 'companyName'],
  }) as ProColumns[];

  // 表单配置
  const createKeys = [
    'companyName',
    'contactUserName',
    'contactPhone',
    'expireTime',
    'accountCount',
    'domain',
    'remark',
  ];
  const createColumns: ProFormColumnsType[] = useCommonColumnsParse(
    oriColumns,
    createKeys,
    undefined,
    {
      required: ['contactUserName', 'contactPhone', 'companyName'],
    },
  ) as ProFormColumnsType[];
  return { listColumns, createColumns };
}

export default useTenantColumns;
