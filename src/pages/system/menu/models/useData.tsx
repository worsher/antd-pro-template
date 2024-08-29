import { getMenuList, createMenu, updateMenu, deleteMenu } from '@/services/ruoyi/menu';
import groupBy from 'lodash/groupBy';

function useMenuData() {
  const buildTree = (items: any[], parentId: number): any[] => {
    const curMenu = items.filter((item: any) => item.parentId === parentId);
    const menuGroup = groupBy(items, 'parentId');
    return curMenu.map((item: any) => {
      const nItem = {
        ...item,
        key: item.menuId,
        title: item.menuName,
        value: item.menuId,
        children: menuGroup[item.menuId] ? buildTree(menuGroup[item.menuId], item.menuId) : null,
      };
      return nItem;
    });
  };
  const getList = async (params: any) => {
    const res = await getMenuList(params);
    return {
      data: buildTree(res.data || [], 0),
    };
  };

  const create = async (params: any) => {
    const res = await createMenu(params);
    return res?.code === 200;
  };

  const update = async (params: any) => {
    const res = await updateMenu(params);
    return res?.code === 200;
  };

  const remove = async (params: any) => {
    const res = await deleteMenu(params);
    return res?.code === 200;
  };

  return {
    getList,
    create,
    update,
    remove,
  };
}

export default useMenuData;
