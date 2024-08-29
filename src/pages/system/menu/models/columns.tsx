import useColumns, { OriColumnType } from '@/models/useColumns';
import { ProColumns } from '@ant-design/pro-components';
import useMenuData from './useData';

function useMenuColumns() {
  const { getList } = useMenuData();
  const MenuColumns: Record<string, OriColumnType> = {
    menuId: {
      title: '菜单ID',
      dataIndex: 'menuId',
      key: 'menuId',
    },
    parentId: {
      title: '父菜单ID',
      dataIndex: 'parentId',
      key: 'parentId',
      valueType: 'treeSelect',
      request: async () => {
        const res = await getList({});
        return [
          {
            title: '根目录',
            value: 0,
            children: res?.data || [],
          },
        ];
      },
    },
    menuName: {
      title: '菜单名称',
      dataIndex: 'menuName',
      key: 'menuName',
    },
    orderNum: {
      title: '显示顺序',
      dataIndex: 'orderNum',
      key: 'orderNum',
    },
    path: {
      title: '路由地址',
      dataIndex: 'path',
      key: 'path',
      dependencies: ['menuType'],
      formItemProps: (form: any) => {
        return {
          hidden: form.getFieldValue('menuType') === 'F',
        };
      },
    },
    component: {
      title: '组件路径',
      dataIndex: 'component',
      key: 'component',
      dependencies: ['menuType'],
      formItemProps: (form: any) => {
        return {
          hidden: form.getFieldValue('menuType') !== 'C',
        };
      },
    },
    queryParam: {
      title: '路由参数',
      dataIndex: 'queryParam',
      key: 'queryParam',
      dependencies: ['menuType'],
      formItemProps: (form: any) => {
        return {
          hidden: form.getFieldValue('menuType') !== 'C',
        };
      },
    },
    isFrame: {
      title: '是否为外链',
      dataIndex: 'isFrame',
      key: 'isFrame',
      valueEnum: {
        '0': '是',
        '1': '否',
      },
      dependencies: ['menuType'],
      formItemProps: (form: any) => {
        return {
          hidden: form.getFieldValue('menuType') === 'F',
        };
      },
    },
    isCache: {
      title: '是否缓存',
      dataIndex: 'isCache',
      key: 'isCache',
      valueEnum: {
        '0': '缓存',
        '1': '不缓存',
      },
      dependencies: ['menuType'],
      formItemProps: (form: any) => {
        return {
          hidden: form.getFieldValue('menuType') !== 'C',
        };
      },
    },
    menuType: {
      title: '菜单类型',
      dataIndex: 'menuType',
      key: 'menuType',
      valueEnum: {
        M: '目录',
        C: '菜单',
        F: '按钮',
      },
    },
    visible: {
      title: '显示状态',
      dataIndex: 'visible',
      key: 'visible',
      valueEnum: {
        '0': '显示',
        '1': '隐藏',
      },
      dependencies: ['menuType'],
      formItemProps: (form: any) => {
        return {
          hidden: form.getFieldValue('menuType') === 'F',
        };
      },
    },
    status: {
      title: '菜单状态',
      dataIndex: 'status',
      key: 'status',
      valueEnum: {
        '0': '正常',
        '1': '停用',
      },
      dependencies: ['menuType'],
      formItemProps: (form: any) => {
        return {
          hidden: form.getFieldValue('menuType') === 'F',
        };
      },
    },
    perms: {
      title: '权限标识',
      dataIndex: 'perms',
      key: 'perms',
      dependencies: ['menuType'],
      formItemProps: (form: any) => {
        return {
          hidden: form.getFieldValue('menuType') === 'M',
        };
      },
    },
    icon: {
      title: '菜单图标',
      dataIndex: 'icon',
      key: 'icon',
      render: (_, record) => {
        if (!record.icon || record.icon === '' || !/[a-z]+/.test(record.icon)) return <>-</>;
        return (
          <img
            style={{ width: '16px', height: '16px' }}
            src={`/icons/svg/${record.icon}.svg`}
            alt="icon"
          />
        );
      },
    },
    remark: {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
    },
  };
  const { useCommonColumnsParse } = useColumns();
  const listKeys = ['menuName', 'icon', 'orderNum', 'perms', 'status', 'path'];

  const editKeys = [
    'parentId',
    'menuType',
    'menuName',
    'orderNum',
    'isFrame',
    'path',
    'component',
    'perms',
    'queryParam',
    'isCache',
    'visible',
    'status',
  ];

  const listColumns: ProColumns[] = useCommonColumnsParse(MenuColumns, listKeys, undefined, {
    search: ['menuName', 'status'],
  }) as ProColumns[];

  const editColumns: ProColumns[] = useCommonColumnsParse(MenuColumns, editKeys, undefined, {
    required: ['menuName', 'orderNum', 'path'],
  }) as ProColumns[];

  return {
    listColumns,
    editColumns,
  };
}

export default useMenuColumns;
