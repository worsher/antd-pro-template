import { getMenuNameList } from './utils/tools';

/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  const { permissions, menus = [] } = currentUser ?? {};
  const accessRoutes = getMenuNameList(menus);

  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    canAccess: (permission: string) => permissions?.includes(permission),
    canAccessRoute: (route: any) =>
      accessRoutes.includes(route.name) || accessRoutes.includes(route.accessName),
  };
}
