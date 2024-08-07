export const formatMenu = (menus: any[]) => {
  return menus.map((item: any) => {
    let menu = {
      ...item,
      name: item?.meta?.title || item?.name,
    };
    if (item?.children) {
      menu.children = formatMenu(item.children);
    }

    return menu;
  });
};
