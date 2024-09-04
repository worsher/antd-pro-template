declare namespace API {
  type allocatedListParams = {
    user: SysUserBo;
    pageQuery: PageQuery;
  };

  type authRoleParams = {
    /** 用户ID */
    userId: number;
  };

  type AvatarVo = {
    /** 头像地址 */
    imgUrl?: string;
  };

  type cancelAuthUserAllParams = {
    /** 角色ID */
    roleId: number;
    /** 用户ID串 */
    userIds: number[];
  };

  type deptTreeParams = {
    dept: SysDeptBo;
  };

  type DeptTreeSelectVo = {
    /** 选中部门列表 */
    checkedKeys?: number[];
    /** 下拉树结构列表 */
    depts?: TreeLong[];
  };

  type dictTypeParams = {
    /** 字典类型 */
    dictType: string;
  };

  type dynamicTenantParams = {
    /** 租户ID */
    tenantId: string;
  };

  type excludeChildParams = {
    /** 部门ID */
    deptId: number;
  };

  type export10Params = {
    bo: SysClientBo;
  };

  type export1Params = {
    bo: SysTenantPackageBo;
  };

  type export2Params = {
    bo: SysTenantBo;
  };

  type export3Params = {
    role: SysRoleBo;
  };

  type export4Params = {
    post: SysPostBo;
  };

  type export5Params = {
    operLog: SysOperLogBo;
  };

  type export6Params = {
    logininfor: SysLogininforBo;
  };

  type export7Params = {
    dictType: SysDictTypeBo;
  };

  type export8Params = {
    dictData: SysDictDataBo;
  };

  type export9Params = {
    config: SysConfigBo;
  };

  type exportUsingPOSTParams = {
    user: SysUserBo;
  };

  type forceLogoutParams = {
    /** token值 */
    tokenId: string;
  };

  type getConfigKeyParams = {
    /** 参数Key */
    configKey: string;
  };

  type getInfo10Params = {
    /** 字典ID */
    dictId: number;
  };

  type getInfo11Params = {
    /** 字典code */
    dictCode: number;
  };

  type getInfo12Params = {
    /** 部门ID */
    deptId: number;
  };

  type getInfo13Params = {
    /** 参数ID */
    configId: number;
  };

  type getInfo14Params = {
    /** 主键 */
    id: number;
  };

  type getInfo1Params = {
    /** 用户ID */
    userId: number | string;
  };

  type getInfo3Params = {
    /** 主键 */
    id: number;
  };

  type getInfo4Params = {
    /** 主键 */
    packageId: number;
  };

  type getInfo5Params = {
    /** 主键 */
    id: string;
  };

  type getInfo6Params = {
    /** 角色ID */
    roleId: number;
  };

  type getInfo7Params = {
    /** 岗位ID */
    postId: number;
  };

  type getInfo8Params = {
    /** 公告ID */
    noticeId: number;
  };

  type getInfo9Params = {
    /** 菜单ID */
    menuId: number;
  };

  type importDataParams = {
    /** 是否更新已存在数据 */
    updateSupport: boolean;
  };

  type insertAuthRoleParams = {
    /** 用户Id */
    userId: number;
    /** 角色ID串 */
    roleIds: number[];
  };

  type list10Params = {
    logininfor: SysLogininforBo;
    pageQuery: PageQuery;
  };

  type list11Params = {
    dictType: SysDictTypeBo;
    pageQuery: PageQuery;
  };

  type list12Params = {
    dictData: SysDictDataBo;
    pageQuery: PageQuery;
  };

  type list13Params = {
    dept: SysDeptBo;
  };

  type list14Params = {
    config: SysConfigBo;
    pageQuery: PageQuery;
  };

  type list15Params = {
    bo: SysClientBo;
    pageQuery: PageQuery;
  };

  type list1Params = {
    bo: SysTenantPackageBo;
    pageQuery: PageQuery;
  };

  type list2Params = {
    bo: SysTenantBo;
    pageQuery: PageQuery;
  };

  type list4Params = {
    role: SysRoleBo;
    pageQuery: PageQuery;
  };

  type list5Params = {
    post: SysPostBo;
    pageQuery: PageQuery;
  };

  type list6Params = {
    operLog: SysOperLogBo;
    pageQuery: PageQuery;
  };

  type list7Params = {
    /** IP地址 */
    ipaddr: string;
    /** 用户名 */
    userName: string;
  };

  type list8Params = {
    notice: SysNoticeBo;
    pageQuery: PageQuery;
  };

  type list9Params = {
    menu: SysMenuBo;
  };

  type listByDeptParams = {
    deptId: number;
  };

  type listParams = {
    user: SysUserBo;
    pageQuery: PageQuery;
  };

  type MenuTreeSelectVo = {
    /** 选中菜单列表 */
    checkedKeys?: number[];
    /** 菜单下拉树结构列表 */
    menus?: TreeLong[];
  };

  type MetaVo = {
    /** 设置该路由在侧边栏和面包屑中展示的名字 */
    title?: string;
    /** 设置该路由的图标，对应路径src/assets/icons/svg */
    icon?: string;
    /** 设置为true，则不会被 <keep-alive>缓存 */
    noCache?: boolean;
    /** 内链地址（http(s)://开头） */
    link?: string;
  };

  type PageQuery = {
    /** 分页大小 */
    pageSize?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向desc或者asc */
    isAsc?: string;
  };

  type ProfileVo = {
    user?: SysUserVo;
    /** 用户所属角色组 */
    roleGroup?: string;
    /** 用户所属岗位组 */
    postGroup?: string;
  };

  type RAvatarVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: AvatarVo;
  };

  type RDeptTreeSelectVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: DeptTreeSelectVo;
  };

  type remove10Params = {
    /** 字典code串 */
    dictCodes: number[];
  };

  type remove11Params = {
    /** 部门ID */
    deptId: number;
  };

  type remove12Params = {
    /** 参数ID串 */
    configIds: number[];
  };

  type remove13Params = {
    /** 主键串 */
    ids: number[];
  };

  type remove1Params = {
    /** 主键串 */
    ids: number[];
  };

  type remove2Params = {
    /** 主键串 */
    packageIds: number[];
  };

  type remove3Params = {
    /** 角色ID串 */
    roleIds: number[];
  };

  type remove4Params = {
    /** 岗位ID串 */
    postIds: number[];
  };

  type remove5Params = {
    /** 日志ids */
    operIds: number[];
  };

  type remove6Params = {
    /** 公告ID串 */
    noticeIds: number[];
  };

  type remove7Params = {
    /** 菜单ID */
    menuId: number;
  };

  type remove8Params = {
    /** 日志ids */
    infoIds: number[];
  };

  type remove9Params = {
    /** 字典ID串 */
    dictIds: number[];
  };

  type removeParams = {
    /** 角色ID串 */
    userIds: Array<number | string> | string | number;
  };

  type RListRouterVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: RouterVo[];
  };

  type RListSysDeptVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: SysDeptVo[];
  };

  type RListSysDictDataVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: SysDictDataVo[];
  };

  type RListSysDictTypeVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: SysDictTypeVo[];
  };

  type RListSysMenuVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: SysMenuVo[];
  };

  type RListSysPostVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: SysPostVo[];
  };

  type RListSysRoleVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: SysRoleVo[];
  };

  type RListSysSocialVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: SysSocialVo[];
  };

  type RListSysTenantPackageVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: SysTenantPackageVo[];
  };

  type RListSysUserVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: SysUserVo[];
  };

  type RListTreeLong = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: TreeLong[];
  };

  type RMenuTreeSelectVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: MenuTreeSelectVo;
  };

  type roleDeptTreeselectParams = {
    /** 角色ID */
    roleId: number;
  };

  type roleMenuTreeselectParams = {
    /** 角色ID */
    roleId: number;
  };

  type RouterVo = {
    /** 路由名字 */
    name?: string;
    /** 路由地址 */
    path?: string;
    /** 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现 */
    hidden?: boolean;
    /** 重定向地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击 */
    redirect?: string;
    /** 组件地址 */
    component?: string;
    /** 路由参数：如 {"id": 1, "name": "ry"} */
    query?: string;
    /** 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面 */
    alwaysShow?: boolean;
    meta?: MetaVo;
  };

  type RProfileVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: ProfileVo;
  };

  type RSysClientVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: SysClientVo;
  };

  type RSysConfigVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: SysConfigVo;
  };

  type RSysDeptVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: SysDeptVo;
  };

  type RSysDictDataVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: SysDictDataVo;
  };

  type RSysDictTypeVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: SysDictTypeVo;
  };

  type RSysMenuVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: SysMenuVo;
  };

  type RSysNoticeVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: SysNoticeVo;
  };

  type RSysPostVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: SysPostVo;
  };

  type RSysRoleVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: SysRoleVo;
  };

  type RSysSocialVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: SysSocialVo;
  };

  type RSysTenantPackageVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: SysTenantPackageVo;
  };

  type RSysTenantVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: SysTenantVo;
  };

  type RSysUserInfoVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: SysUserInfoVo;
  };

  type RUserInfoVo = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    data?: UserInfoVo;
  };

  type RVoid = {
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
    /** 数据对象 */
    data?: Record<string, any>;
  };

  type selectAuthUserAllParams = {
    /** 角色ID */
    roleId: number;
    /** 用户ID串 */
    userIds: number[];
  };

  type syncTenantPackageParams = {
    /** 租户id */
    tenantId: string;
    /** 套餐id */
    packageId: number;
  };

  type SysClientBo = {
    /** 创建部门 */
    createDept?: number;
    /** 创建者 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新者 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
    /** id */
    id: number;
    /** 客户端id */
    clientId?: string;
    /** 客户端key */
    clientKey: string;
    /** 客户端秘钥 */
    clientSecret: string;
    /** 授权类型 */
    grantTypeList: string[];
    /** 授权类型 */
    grantType?: string;
    /** 设备类型 */
    deviceType?: string;
    /** token活跃超时时间 */
    activeTimeout?: number;
    /** token固定超时时间 */
    timeout?: number;
    /** 状态（0正常 1停用） */
    status?: string;
  };

  type SysClientVo = {
    /** id */
    id?: number;
    /** 客户端id */
    clientId?: string;
    /** 客户端key */
    clientKey?: string;
    /** 客户端秘钥 */
    clientSecret?: string;
    /** 授权类型 */
    grantTypeList?: string[];
    /** 授权类型 */
    grantType?: string;
    /** 设备类型 */
    deviceType?: string;
    /** token活跃超时时间 */
    activeTimeout?: number;
    /** token固定超时时间 */
    timeout?: number;
    /** 状态（0正常 1停用） */
    status?: string;
  };

  type SysConfigBo = {
    /** 创建部门 */
    createDept?: number;
    /** 创建者 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新者 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
    /** 参数主键 */
    configId: number;
    /** 参数名称 */
    configName: string;
    /** 参数键名 */
    configKey: string;
    /** 参数键值 */
    configValue: string;
    /** 系统内置（Y是 N否） */
    configType?: string;
    /** 备注 */
    remark?: string;
  };

  type SysConfigVo = {
    /** 参数主键 */
    configId?: number;
    /** 参数名称 */
    configName?: string;
    /** 参数键名 */
    configKey?: string;
    /** 参数键值 */
    configValue?: string;
    /** 系统内置（Y是 N否） */
    configType?: string;
    /** 备注 */
    remark?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type SysDeptBo = {
    /** 创建部门 */
    createDept?: number;
    /** 创建者 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新者 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
    /** 部门id */
    deptId: number;
    /** 父部门ID */
    parentId?: number;
    /** 部门名称 */
    deptName: string;
    /** 显示顺序 */
    orderNum: number;
    /** 负责人 */
    leader?: number;
    /** 联系电话 */
    phone?: string;
    /** 邮箱 */
    email?: string;
    /** 部门状态（0正常 1停用） */
    status?: string;
  };

  type SysDeptVo = {
    /** 部门id */
    deptId?: number;
    /** 父部门id */
    parentId?: number;
    /** 父部门名称 */
    parentName?: string;
    /** 祖级列表 */
    ancestors?: string;
    /** 部门名称 */
    deptName?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 负责人ID */
    leader?: number;
    /** 负责人 */
    leaderName?: string;
    /** 联系电话 */
    phone?: string;
    /** 邮箱 */
    email?: string;
    /** 部门状态（0正常 1停用） */
    status?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type SysDictDataBo = {
    /** 创建部门 */
    createDept?: number;
    /** 创建者 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新者 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
    /** 字典编码 */
    dictCode: number;
    /** 字典排序 */
    dictSort?: number;
    /** 字典标签 */
    dictLabel: string;
    /** 字典键值 */
    dictValue: string;
    /** 字典类型 */
    dictType: string;
    /** 样式属性（其他样式扩展） */
    cssClass?: string;
    /** 表格回显样式 */
    listClass?: string;
    /** 是否默认（Y是 N否） */
    isDefault?: string;
    /** 备注 */
    remark?: string;
  };

  type SysDictDataVo = {
    /** 字典编码 */
    dictCode?: number;
    /** 字典排序 */
    dictSort?: number;
    /** 字典标签 */
    dictLabel?: string;
    /** 字典键值 */
    dictValue?: string;
    /** 字典类型 */
    dictType?: string;
    /** 样式属性（其他样式扩展） */
    cssClass?: string;
    /** 表格回显样式 */
    listClass?: string;
    /** 是否默认（Y是 N否） */
    isDefault?: string;
    /** 备注 */
    remark?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type SysDictTypeBo = {
    /** 创建部门 */
    createDept?: number;
    /** 创建者 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新者 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
    /** 字典主键 */
    dictId: number;
    /** 字典名称 */
    dictName: string;
    /** 字典类型 */
    dictType: string;
    /** 备注 */
    remark?: string;
  };

  type SysDictTypeVo = {
    /** 字典主键 */
    dictId?: number;
    /** 字典名称 */
    dictName?: string;
    /** 字典类型 */
    dictType?: string;
    /** 备注 */
    remark?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type SysLogininforBo = {
    /** 访问ID */
    infoId?: number;
    /** 租户编号 */
    tenantId?: string;
    /** 用户账号 */
    userName?: string;
    /** 登录IP地址 */
    ipaddr?: string;
    /** 登录地点 */
    loginLocation?: string;
    /** 浏览器类型 */
    browser?: string;
    /** 操作系统 */
    os?: string;
    /** 登录状态（0成功 1失败） */
    status?: string;
    /** 提示消息 */
    msg?: string;
    /** 访问时间 */
    loginTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
  };

  type SysLogininforVo = {
    /** 访问ID */
    infoId?: number;
    /** 租户编号 */
    tenantId?: string;
    /** 用户账号 */
    userName?: string;
    /** 登录状态（0成功 1失败） */
    status?: string;
    /** 登录IP地址 */
    ipaddr?: string;
    /** 登录地点 */
    loginLocation?: string;
    /** 浏览器类型 */
    browser?: string;
    /** 操作系统 */
    os?: string;
    /** 提示消息 */
    msg?: string;
    /** 访问时间 */
    loginTime?: string;
  };

  type SysMenuBo = {
    /** 创建部门 */
    createDept?: number;
    /** 创建者 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新者 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
    /** 菜单ID */
    menuId: number;
    /** 父菜单ID */
    parentId?: number;
    /** 菜单名称 */
    menuName: string;
    /** 显示顺序 */
    orderNum: number;
    /** 路由地址 */
    path?: string;
    /** 组件路径 */
    component?: string;
    /** 路由参数 */
    queryParam?: string;
    /** 是否为外链（0是 1否） */
    isFrame?: string;
    /** 是否缓存（0缓存 1不缓存） */
    isCache?: string;
    /** 菜单类型（M目录 C菜单 F按钮） */
    menuType: string;
    /** 显示状态（0显示 1隐藏） */
    visible?: string;
    /** 菜单状态（0正常 1停用） */
    status?: string;
    /** 权限标识 */
    perms?: string;
    /** 菜单图标 */
    icon?: string;
    /** 备注 */
    remark?: string;
  };

  type SysMenuVo = {
    /** 菜单ID */
    menuId?: number;
    /** 菜单名称 */
    menuName?: string;
    /** 父菜单ID */
    parentId?: number;
    /** 显示顺序 */
    orderNum?: number;
    /** 路由地址 */
    path?: string;
    /** 组件路径 */
    component?: string;
    /** 路由参数 */
    queryParam?: string;
    /** 是否为外链（0是 1否） */
    isFrame?: string;
    /** 是否缓存（0缓存 1不缓存） */
    isCache?: string;
    /** 菜单类型（M目录 C菜单 F按钮） */
    menuType?: string;
    /** 显示状态（0显示 1隐藏） */
    visible?: string;
    /** 菜单状态（0正常 1停用） */
    status?: string;
    /** 权限标识 */
    perms?: string;
    /** 菜单图标 */
    icon?: string;
    /** 创建部门 */
    createDept?: number;
    /** 备注 */
    remark?: string;
    /** 创建时间 */
    createTime?: string;
    /** 子菜单 */
    children?: SysMenuVo[];
  };

  type SysNoticeBo = {
    /** 创建部门 */
    createDept?: number;
    /** 创建者 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新者 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
    /** 公告ID */
    noticeId: number;
    /** 公告标题 */
    noticeTitle: string;
    /** 公告类型（1通知 2公告） */
    noticeType?: string;
    /** 公告内容 */
    noticeContent?: string;
    /** 公告状态（0正常 1关闭） */
    status?: string;
    /** 备注 */
    remark?: string;
    /** 创建人名称 */
    createByName?: string;
  };

  type SysNoticeVo = {
    /** 公告ID */
    noticeId?: number;
    /** 公告标题 */
    noticeTitle?: string;
    /** 公告类型（1通知 2公告） */
    noticeType?: string;
    /** 公告内容 */
    noticeContent?: string;
    /** 公告状态（0正常 1关闭） */
    status?: string;
    /** 备注 */
    remark?: string;
    /** 创建者 */
    createBy?: number;
    /** 创建人名称 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type SysOperLogBo = {
    /** 日志主键 */
    operId?: number;
    /** 租户编号 */
    tenantId?: string;
    /** 模块标题 */
    title?: string;
    /** 业务类型（0其它 1新增 2修改 3删除） */
    businessType?: number;
    /** 业务类型数组 */
    businessTypes?: number[];
    /** 方法名称 */
    method?: string;
    /** 请求方式 */
    requestMethod?: string;
    /** 操作类别（0其它 1后台用户 2手机端用户） */
    operatorType?: number;
    /** 操作人员 */
    operName?: string;
    /** 部门名称 */
    deptName?: string;
    /** 请求URL */
    operUrl?: string;
    /** 主机地址 */
    operIp?: string;
    /** 操作地点 */
    operLocation?: string;
    /** 请求参数 */
    operParam?: string;
    /** 返回参数 */
    jsonResult?: string;
    /** 数据变化 */
    dataChanges?: string;
    /** 数据变化主体id */
    dataMainId?: number;
    /** 操作状态（0正常 1异常） */
    status?: number;
    /** 错误消息 */
    errorMsg?: string;
    /** 操作时间 */
    operTime?: string;
    /** 消耗时间 */
    costTime?: number;
    /** 请求参数 */
    params?: Record<string, any>;
  };

  type SysOperLogVo = {
    /** 日志主键 */
    operId?: number;
    /** 租户编号 */
    tenantId?: string;
    /** 模块标题 */
    title?: string;
    /** 业务类型（0其它 1新增 2修改 3删除） */
    businessType?: number;
    /** 业务类型数组 */
    businessTypes?: number[];
    /** 方法名称 */
    method?: string;
    /** 请求方式 */
    requestMethod?: string;
    /** 操作类别（0其它 1后台用户 2手机端用户） */
    operatorType?: number;
    /** 操作人员 */
    operName?: string;
    /** 部门名称 */
    deptName?: string;
    /** 请求URL */
    operUrl?: string;
    /** 主机地址 */
    operIp?: string;
    /** 操作地点 */
    operLocation?: string;
    /** 请求参数 */
    operParam?: string;
    /** 返回参数 */
    jsonResult?: string;
    /** 数据变化 */
    dataChanges?: string;
    /** 数据变化主体id */
    dataMainId?: number;
    /** 操作状态（0正常 1异常） */
    status?: number;
    /** 错误消息 */
    errorMsg?: string;
    /** 操作时间 */
    operTime?: string;
    /** 消耗时间 */
    costTime?: number;
  };

  type SysPostBo = {
    /** 创建部门 */
    createDept?: number;
    /** 创建者 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新者 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
    /** 岗位ID */
    postId: number;
    /** 岗位编码 */
    postCode: string;
    /** 岗位名称 */
    postName: string;
    /** 显示顺序 */
    postSort: number;
    /** 状态（0正常 1停用） */
    status?: string;
    /** 备注 */
    remark?: string;
  };

  type SysPostVo = {
    /** 岗位ID */
    postId?: number;
    /** 岗位编码 */
    postCode?: string;
    /** 岗位名称 */
    postName?: string;
    /** 显示顺序 */
    postSort?: number;
    /** 状态（0正常 1停用） */
    status?: string;
    /** 备注 */
    remark?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type SysRoleBo = {
    /** 创建部门 */
    createDept?: number;
    /** 创建者 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新者 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
    /** 角色ID */
    roleId: number;
    /** 角色名称 */
    roleName: string;
    /** 角色权限字符串 */
    roleKey: string;
    /** 显示顺序 */
    roleSort: number;
    /** 数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限） */
    dataScope?: string;
    /** 菜单树选择项是否关联显示 */
    menuCheckStrictly?: boolean;
    /** 部门树选择项是否关联显示 */
    deptCheckStrictly?: boolean;
    /** 角色状态（0正常 1停用） */
    status?: string;
    /** 备注 */
    remark?: string;
    /** 菜单组 */
    menuIds?: number[];
    /** 部门组（数据权限） */
    deptIds?: number[];
    superAdmin?: boolean;
  };

  type SysRoleVo = {
    /** 角色ID */
    roleId?: number;
    /** 角色名称 */
    roleName?: string;
    /** 角色权限字符串 */
    roleKey?: string;
    /** 显示顺序 */
    roleSort?: number;
    /** 数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限） */
    dataScope?: string;
    /** 菜单树选择项是否关联显示 */
    menuCheckStrictly?: boolean;
    /** 部门树选择项是否关联显示 */
    deptCheckStrictly?: boolean;
    /** 角色状态（0正常 1停用） */
    status?: string;
    /** 备注 */
    remark?: string;
    /** 创建时间 */
    createTime?: string;
    /** 用户是否存在此角色标识 默认不存在 */
    flag?: boolean;
    superAdmin?: boolean;
  };

  type SysSocialVo = {
    /** 主键 */
    id?: number;
    /** 用户ID */
    userId?: number;
    /** 租户ID */
    tenantId?: string;
    /** 的唯一ID */
    authId?: string;
    /** 用户来源 */
    source?: string;
    /** 用户的授权令牌 */
    accessToken?: string;
    /** 用户的授权令牌的有效期，部分平台可能没有 */
    expireIn?: number;
    /** 刷新令牌，部分平台可能没有 */
    refreshToken?: string;
    /** 用户的 open id */
    openId?: string;
    /** 授权的第三方账号 */
    userName?: string;
    /** 授权的第三方昵称 */
    nickName?: string;
    /** 授权的第三方邮箱 */
    email?: string;
    /** 授权的第三方头像地址 */
    avatar?: string;
    /** 平台的授权信息，部分平台可能没有 */
    accessCode?: string;
    /** 用户的 unionid */
    unionId?: string;
    /** 授予的权限，部分平台可能没有 */
    scope?: string;
    /** 个别平台的授权信息，部分平台可能没有 */
    tokenType?: string;
    /** id token，部分平台可能没有 */
    idToken?: string;
    /** 小米平台用户的附带属性，部分平台可能没有 */
    macAlgorithm?: string;
    /** 小米平台用户的附带属性，部分平台可能没有 */
    macKey?: string;
    /** 用户的授权code，部分平台可能没有 */
    code?: string;
    /** Twitter平台用户的附带属性，部分平台可能没有 */
    oauthToken?: string;
    /** Twitter平台用户的附带属性，部分平台可能没有 */
    oauthTokenSecret?: string;
    /** 显示绑定时间 */
    createTime?: string;
  };

  type SysTenantBo = {
    /** 创建部门 */
    createDept?: number;
    /** 创建者 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新者 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
    /** id */
    id: number;
    /** 租户编号 */
    tenantId?: string;
    /** 联系人 */
    contactUserName: string;
    /** 联系电话 */
    contactPhone: string;
    /** 企业名称 */
    companyName: string;
    /** 用户名（创建系统用户） */
    username: string;
    /** 密码（创建系统用户） */
    password: string;
    /** 统一社会信用代码 */
    licenseNumber?: string;
    /** 地址 */
    address?: string;
    /** 域名 */
    domain?: string;
    /** 企业简介 */
    intro?: string;
    /** 备注 */
    remark?: string;
    /** 租户套餐编号 */
    packageId: number;
    /** 过期时间 */
    expireTime?: string;
    /** 用户数量（-1不限制） */
    accountCount?: number;
    /** 租户状态（0正常 1停用） */
    status?: string;
  };

  type SysTenantPackageBo = {
    /** 创建部门 */
    createDept?: number;
    /** 创建者 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新者 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
    /** 租户套餐id */
    packageId: number;
    /** 套餐名称 */
    packageName: string;
    /** 关联菜单id */
    menuIds?: number[];
    /** 备注 */
    remark?: string;
    /** 菜单树选择项是否关联显示 */
    menuCheckStrictly?: boolean;
    /** 状态（0正常 1停用） */
    status?: string;
  };

  type SysTenantPackageVo = {
    /** 租户套餐id */
    packageId?: number;
    /** 套餐名称 */
    packageName?: string;
    /** 关联菜单id */
    menuIds?: string;
    /** 备注 */
    remark?: string;
    /** 菜单树选择项是否关联显示 */
    menuCheckStrictly?: boolean;
    /** 状态（0正常 1停用） */
    status?: string;
  };

  type SysTenantVo = {
    /** id */
    id?: number;
    /** 租户编号 */
    tenantId?: string;
    /** 联系人 */
    contactUserName?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 企业名称 */
    companyName?: string;
    /** 统一社会信用代码 */
    licenseNumber?: string;
    /** 地址 */
    address?: string;
    /** 域名 */
    domain?: string;
    /** 企业简介 */
    intro?: string;
    /** 备注 */
    remark?: string;
    /** 租户套餐编号 */
    packageId?: number;
    /** 过期时间 */
    expireTime?: string;
    /** 用户数量（-1不限制） */
    accountCount?: number;
    /** 租户状态（0正常 1停用） */
    status?: string;
  };

  type SysUserBo = {
    /** 创建部门 */
    createDept?: number;
    /** 创建者 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新者 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
    /** 用户ID */
    userId?: number;
    /** 部门ID */
    deptId?: number;
    /** 用户账号 */
    userName: string;
    /** 用户昵称 */
    nickName: string;
    /** 用户类型（sys_user系统用户） */
    userType?: string;
    /** 用户邮箱 */
    email?: string;
    /** 手机号码 */
    phonenumber?: string;
    /** 用户性别（0男 1女 2未知） */
    sex?: string;
    /** 头像地址 */
    avatar?: number;
    /** 密码 */
    password?: string;
    /** 帐号状态（0正常 1停用） */
    status?: string;
    /** 最后登录IP */
    loginIp?: string;
    /** 最后登录时间 */
    loginDate?: string;
    /** 备注 */
    remark?: string;
    /** 角色组 */
    roleIds?: number[];
    /** 岗位组 */
    postIds?: number[];
    /** 数据权限 当前角色ID */
    roleId?: number;
    superAdmin?: boolean;
  };

  type SysUserInfoVo = {
    user?: SysUserVo;
    /** 角色ID列表 */
    roleIds?: number[];
    /** 角色列表 */
    roles?: SysRoleVo[];
    /** 岗位ID列表 */
    postIds?: number[];
    /** 岗位列表 */
    posts?: SysPostVo[];
  };

  type SysUserOnline = {
    /** 会话编号 */
    tokenId?: string;
    /** 部门名称 */
    deptName?: string;
    /** 用户名称 */
    userName?: string;
    /** 登录IP地址 */
    ipaddr?: string;
    /** 登录地址 */
    loginLocation?: string;
    /** 浏览器类型 */
    browser?: string;
    /** 操作系统 */
    os?: string;
    /** 登录时间 */
    loginTime?: number;
  };

  type SysUserProfileBo = {
    /** 创建部门 */
    createDept?: number;
    /** 创建者 */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新者 */
    updateBy?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 请求参数 */
    params?: Record<string, any>;
    /** 用户ID */
    userId?: number;
    /** 用户昵称 */
    nickName?: string;
    /** 用户邮箱 */
    email?: string;
    /** 手机号码 */
    phonenumber?: string;
    /** 用户性别（0男 1女 2未知） */
    sex?: string;
  };

  type SysUserRole = {
    /** 用户ID */
    userId?: number;
    /** 角色ID */
    roleId?: number;
  };

  type SysUserVo = {
    /** 用户ID */
    userId?: number;
    /** 租户ID */
    tenantId?: string;
    /** 部门ID */
    deptId?: number;
    /** 用户账号 */
    userName?: string;
    /** 用户昵称 */
    nickName?: string;
    /** 用户类型（sys_user系统用户） */
    userType?: string;
    /** 用户邮箱 */
    email?: string;
    /** 手机号码 */
    phonenumber?: string;
    /** 用户性别（0男 1女 2未知） */
    sex?: string;
    /** 头像地址 */
    avatar?: number;
    /** 帐号状态（0正常 1停用） */
    status?: string;
    /** 最后登录IP */
    loginIp?: string;
    /** 最后登录时间 */
    loginDate?: string;
    /** 备注 */
    remark?: string;
    /** 创建时间 */
    createTime?: string;
    dept?: SysDeptVo;
    /** 角色对象 */
    roles?: SysRoleVo[];
    /** 角色组 */
    roleIds?: number[];
    /** 岗位组 */
    postIds?: number[];
    /** 数据权限 当前角色ID */
    roleId?: number;
  };

  type TableDataInfoSysClientVo = {
    /** 总记录数 */
    total?: number;
    /** 列表数据 */
    rows?: SysClientVo[];
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
  };

  type TableDataInfoSysConfigVo = {
    /** 总记录数 */
    total?: number;
    /** 列表数据 */
    rows?: SysConfigVo[];
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
  };

  type TableDataInfoSysDictDataVo = {
    /** 总记录数 */
    total?: number;
    /** 列表数据 */
    rows?: SysDictDataVo[];
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
  };

  type TableDataInfoSysDictTypeVo = {
    /** 总记录数 */
    total?: number;
    /** 列表数据 */
    rows?: SysDictTypeVo[];
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
  };

  type TableDataInfoSysLogininforVo = {
    /** 总记录数 */
    total?: number;
    /** 列表数据 */
    rows?: SysLogininforVo[];
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
  };

  type TableDataInfoSysNoticeVo = {
    /** 总记录数 */
    total?: number;
    /** 列表数据 */
    rows?: SysNoticeVo[];
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
  };

  type TableDataInfoSysOperLogVo = {
    /** 总记录数 */
    total?: number;
    /** 列表数据 */
    rows?: SysOperLogVo[];
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
  };

  type TableDataInfoSysPostVo = {
    /** 总记录数 */
    total?: number;
    /** 列表数据 */
    rows?: SysPostVo[];
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
  };

  type TableDataInfoSysRoleVo = {
    /** 总记录数 */
    total?: number;
    /** 列表数据 */
    rows?: SysRoleVo[];
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
  };

  type TableDataInfoSysTenantPackageVo = {
    /** 总记录数 */
    total?: number;
    /** 列表数据 */
    rows?: SysTenantPackageVo[];
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
  };

  type TableDataInfoSysTenantVo = {
    /** 总记录数 */
    total?: number;
    /** 列表数据 */
    rows?: SysTenantVo[];
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
  };

  type TableDataInfoSysUserOnline = {
    /** 总记录数 */
    total?: number;
    /** 列表数据 */
    rows?: SysUserOnline[];
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
  };

  type TableDataInfoSysUserVo = {
    /** 总记录数 */
    total?: number;
    /** 列表数据 */
    rows?: SysUserVo[];
    /** 消息状态码 */
    code?: number;
    /** 消息内容 */
    msg?: string;
  };

  type tenantPackageMenuTreeselectParams = {
    /** 租户套餐ID */
    packageId: number;
  };

  type TreeLong = {
    name?: { empty?: boolean };
    id?: number;
    parentId?: number;
    weight?: Record<string, any>;
    config?: TreeNodeConfig;
    empty?: boolean;
  };

  type TreeNodeConfig = {
    idKey?: string;
    parentIdKey?: string;
    weightKey?: string;
    nameKey?: string;
    childrenKey?: string;
    deep?: number;
  };

  type treeselectParams = {
    menu: SysMenuBo;
  };

  type unallocatedListParams = {
    user: SysUserBo;
    pageQuery: PageQuery;
  };

  type unlockParams = {
    userName: string;
  };

  type updatePwd1Params = {
    /** 新密码 */
    oldPassword: string;
    /** 旧密码 */
    newPassword: string;
  };

  type updatePwdParams = {
    /** 新密码 */
    oldPassword: string;
    /** 旧密码 */
    newPassword: string;
  };

  type UserInfoVo = {
    user?: SysUserVo;
    /** 菜单权限 */
    permissions?: string[];
    /** 角色权限 */
    roles?: string[];
  };
}
