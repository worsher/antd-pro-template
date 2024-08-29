import { FormItemProps, ProColumns, ProFormColumnsType } from '@ant-design/pro-components';
import useAttributionOptions from './useEnums';
import { useEffect } from 'react';
import { useIntl } from '@umijs/max';

export type OriColumnType = ProColumns & {
  langKey?: string;
  noTranslate?: boolean;
};

function useColumnsParse() {
  const useCommonColumnsParse = (
    oriColumns: any,
    configColumns: any[] | false,
    titlePre?: string,
    externalConfig: any = {},
  ): (ProColumns | ProFormColumnsType)[] => {
    const intl = useIntl();
    let config = configColumns ? [...configColumns] : Object.keys(oriColumns);
    const { enums, getEnums } = useAttributionOptions();

    useEffect(() => {
      if (getEnums) {
        getEnums();
      }
    }, []);

    const { search = [], required = [], sort = [], copy = [] } = externalConfig;

    const columns = config.map((item) => {
      let key = typeof item === 'string' ? item : item.key;
      let curColumns = {
        ...oriColumns[key],
        title:
          titlePre && !oriColumns[key]?.noTranslate
            ? intl.formatMessage({ id: titlePre + '.' + (oriColumns[key]?.langKey ?? key) })
            : oriColumns[key]?.title,
      };
      if (typeof item === 'object') {
        curColumns = {
          ...curColumns,
          ...item,
        };
      }
      // 是否有搜索设置
      if (search && search.length > 0) {
        curColumns.hideInSearch = !search.includes(key);
      }

      // 是否有必填设置
      if (required && required.length > 0) {
        if (typeof curColumns.formItemProps === 'function') {
          const formItemProps = curColumns.formItemProps;
          curColumns.formItemProps = (form: any) => {
            const oriFormItemProps = formItemProps(form);
            return {
              ...oriFormItemProps,
              rules: [
                ...(oriFormItemProps?.rules ?? []),
                { required: oriFormItemProps?.hidden ? false : required.includes(key) },
              ],
            };
          };
        } else {
          const formItemProps: FormItemProps | Record<string, any> =
            curColumns?.formItemProps || {};
          curColumns.formItemProps = {
            ...formItemProps,
            rules: [
              ...(formItemProps?.rules ?? []),
              { required: formItemProps?.hidden ? false : required.includes(key) },
            ],
          };
        }
      }
      // 是否有下拉选项
      if (curColumns.valueType === 'select' && !curColumns.request && !curColumns.valueEnum) {
        const optionKey = curColumns?.enumKey ?? (curColumns?.dataIndex as string);
        const options = enums?.[optionKey] || [];

        curColumns.valueEnum = new Map(
          options.map((item: any) => {
            return [item.value, item.label];
          }),
        );
      }

      // 是否需要支持排序
      if (sort && sort.length > 0) {
        curColumns.sorter = sort.includes(key);
      }

      // 是否需要支持复制
      if (copy && copy.length > 0) {
        curColumns.copyable = copy.includes(key);
      }

      return {
        ...curColumns,
      };
    });

    return columns;
  };

  const useTableConfig = (columns: any, config: any) => {
    const allKeys = columns.map((column: any) =>
      typeof column === 'string' ? column : column.key,
    );
    const columnsConfig = Object.fromEntries(allKeys.map((key: string) => [key, {}]));
    if (config?.show) {
      allKeys.forEach((key: string) => {
        columnsConfig[key] = {
          ...columnsConfig[key],
          show: config.show.includes(key),
        };
      });
    }
    return columnsConfig;
  };

  const useColumnsTransform = (columns: any[]) => {
    const ori = Object.fromEntries(columns.map((column: any) => [column.key, column]));
    const keys = Object.keys(ori);
    return useCommonColumnsParse(ori, keys);
  };
  return {
    useCommonColumnsParse,
    useTableConfig,
    useColumnsTransform,
  };
}

export default useColumnsParse;
