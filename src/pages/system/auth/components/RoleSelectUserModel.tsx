import { ProTable } from '@ant-design/pro-components';
import useAuthData from '../models/useData';
import { useState } from 'react';
import { Modal } from 'antd';

const RoleSelectUserModel = (props: any) => {
  const { getUnallocatedList } = useAuthData();
  const { trigger, onOk, roleId, columns = [] } = props;
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <span onClick={() => setVisible(true)}>{trigger}</span>
      <Modal
        width={1000}
        title="选择用户"
        open={visible}
        onCancel={() => setVisible(false)}
        onOk={() => {
          if (onOk) {
            onOk(selectedUserIds);
          }
          setVisible(false);
        }}
      >
        <ProTable
          rowKey="userId"
          columns={columns}
          params={{ roleId }}
          request={getUnallocatedList}
          pagination={{
            pageSize: 10,
          }}
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: selectedUserIds,
            onChange: (selectedRowKeys) => {
              setSelectedUserIds(selectedRowKeys as string[]);
            },
          }}
        />
      </Modal>
    </>
  );
};

export default RoleSelectUserModel;
