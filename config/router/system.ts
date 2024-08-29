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
    ],
  },
];
