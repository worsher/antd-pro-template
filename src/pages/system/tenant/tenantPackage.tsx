import { useTenantPackageData } from './models/useData';
import { useRef, useMemo } from 'react';
import { BetaSchemaForm, ModalForm, ProTable } from '@ant-design/pro-components';
import useTenantPackageColumns from './models/columns';
import { Button, Popconfirm, Switch } from 'antd';

const SystemTenantPackageManage = () => {
  const actionRef = useRef<any>(null);
  const { getList, create, update, remove, switchStatus } = useTenantPackageData(actionRef);
  const { packageListColumns, packageCreateColumns } = useTenantPackageColumns();

  const listSchema = useMemo(() => {
    const columns = packageListColumns.map((column) => {
      if (column.key === 'status') {
        return {
          ...column,
          render: (_: any, record: any) => {
            return (
              <Switch
                checked={record.status === '0'}
                onChange={() =>
                  switchStatus({
                    packageId: record.packageId,
                    status: record.status === '0' ? '1' : '0',
                  })
                }
              />
            );
          },
        };
      }
      return column;
    });

    columns.push({
      title: '操作',
      key: 'action',
      valueType: 'option',
      fixed: 'right',
      render: (_: any, record: any) => {
        return [
          <ModalForm
            title="编辑套餐"
            key={`editTenant-${record.id}`}
            request={async () => record}
            trigger={<Button type="link">编辑</Button>}
            layout="horizontal"
            labelCol={{ style: { width: '100px' } }}
            onFinish={async (formData) => {
              return await update({
                ...record,
                ...formData,
              });
            }}
          >
            <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
              <BetaSchemaForm columns={packageCreateColumns} layoutType="Embed"></BetaSchemaForm>
            </div>
          </ModalForm>,
          <Popconfirm
            key={`deleteTenant-${record.id}`}
            title="确认删除?"
            onConfirm={() => {
              remove({ packageIds: record.packageId });
            }}
          >
            <Button type="link">删除</Button>
          </Popconfirm>,
        ];
      },
    });
    return columns;
  }, [packageListColumns]);

  const createModal = (
    <ModalForm
      trigger={<Button type="primary">创建套餐</Button>}
      title="创建套餐"
      layout="horizontal"
      labelCol={{ style: { width: '100px' } }}
      onFinish={async (formData) => {
        return await create(formData);
      }}
    >
      <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
        <BetaSchemaForm columns={packageCreateColumns} layoutType="Embed"></BetaSchemaForm>
      </div>
    </ModalForm>
  );

  return (
    <>
      <ProTable
        toolBarRender={() => {
          return [createModal];
        }}
        actionRef={actionRef}
        columns={listSchema}
        request={getList}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        pagination={{
          pageSize: 10,
        }}
      />
    </>
  );
};

export default SystemTenantPackageManage;
