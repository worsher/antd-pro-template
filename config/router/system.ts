export const SystemRouter = [
  {
    path: 'system',
    name: 'system',
    routes: [
      {
        path: 'menu',
        name: 'menu',
        component: './system/menu/index',
        access: 'canAccessRoute',
        accessName: 'Menu',
      },
      {
        path: 'user',
        name: 'user',
        component: './system/user/index',
        access: 'canAccessRoute',
        accessName: 'User',
      },
      {
        path: 'dept',
        name: 'department',
        component: './system/department/index',
        access: 'canAccessRoute',
        accessName: 'Dept',
      },
    ],
  },
];
