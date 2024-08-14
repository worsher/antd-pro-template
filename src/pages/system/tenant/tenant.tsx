import { BetaSchemaForm, ModalForm, ProTable } from '@ant-design/pro-components';
import useTenantColumns from './models/columns';
import useTenantData from './models/useData';
import { useMemo, useRef } from 'react';
import { Button, Popconfirm } from 'antd';

const SystemTenantManage = () => {
  const { listColumns, createColumns } = useTenantColumns();
  const actionRef = useRef<any>(null);
  const { getList, create, update, remove } = useTenantData(actionRef);

  const listSchema = useMemo(() => {
    const columns = [...listColumns];
    columns.push({
      title: '操作',
      key: 'action',
      valueType: 'option',
      render: (_: any, record: any) => {
        return [
          <ModalForm
            title="编辑租户"
            key={`editTenant-${record.id}`}
            request={async () => record}
            trigger={<Button type="link">编辑</Button>}
            layout="horizontal"
            labelCol={{ style: { width: '100px' } }}
            onFinish={async (formData) => {
              return await update({
                ...formData,
                id: record.id,
              });
            }}
          >
            <BetaSchemaForm columns={createColumns} layoutType="Embed"></BetaSchemaForm>
          </ModalForm>,
          <Popconfirm
            key={`deleteTenant-${record.id}`}
            title="确认删除?"
            onConfirm={() => {
              remove({ id: record.id });
            }}
          >
            <Button type="link">删除</Button>
          </Popconfirm>,
        ];
      },
    });
    return columns;
  }, [listColumns]);

  const createModal = (
    <>
      <ModalForm
        trigger={<Button type="primary">创建租户</Button>}
        title="创建租户"
        layout="horizontal"
        labelCol={{ style: { width: '100px' } }}
        onFinish={async (formData) => {
          return await create(formData);
        }}
      >
        <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
          <BetaSchemaForm columns={createColumns} layoutType="Embed"></BetaSchemaForm>
        </div>
      </ModalForm>
    </>
  );

  return (
    <ProTable
      actionRef={actionRef}
      toolBarRender={() => {
        return [createModal];
      }}
      columns={listSchema}
      request={getList}
    ></ProTable>
  );
};

export default SystemTenantManage;
