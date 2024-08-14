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

export const getMenuNameList = (menus: any[]) => {
  let list: any[] = [];
  menus.forEach((item: any) => {
    list.push(item.name);
    if (item.children) {
      list = [...list, ...getMenuNameList(item.children)];
    }
  });
  return list;
};
