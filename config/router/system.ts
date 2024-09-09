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
      {
        path: 'role',
        name: 'role',
        component: './system/role/index',
        access: 'canAccessRoute',
        accessName: 'Role',
      },
      {
        path: 'auth/role/:roleId',
        name: 'auth-role',
        component: './system/auth/role',
        access: 'canAccessRoute',
        accessName: 'Role',
      },
      {
        path: 'auth/user/:userId',
        name: 'auth-user',
        component: './system/auth/user',
        access: 'canAccessRoute',
        accessName: 'Role',
      },
    ],
  },
];
