export const TenantRouter = [
  {
    path: '/tenant',
    name: 'tenant',
    routes: [
      {
        path: 'tenant',
        name: 'tenantList',
        component: './system/tenant/tenant',
        access: 'canAccessRoute',
        accessName: 'Tenant121',
      },
      {
        path: 'tenantPackage',
        name: 'tenantPackage',
        component: './system/tenant/tenantPackage',
        access: 'canAccessRoute',
        accessName: 'TenantPackage122',
      },
    ],
  },
];
