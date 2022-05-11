import { List } from 'antd';
import { useAppSelector } from '@store/hooks';

import { selectUsedModuleList, selectUnusedModuleList } from '../resume.slice';
import { FC } from 'react';
import { ModuleItem } from '../constants/resume-modules';

interface ModuleListProps {
  moduleType: 'using' | 'unused';
  onEdit?: (item: ModuleItem) => void;
}

export const ModuleList: FC<ModuleListProps> = (props) => {
  const { moduleType, onEdit } = props;
  const usedModuleList = useAppSelector(selectUsedModuleList);
  const unusedModuleList = useAppSelector(selectUnusedModuleList);

  const moduleList = moduleType === 'using' ? usedModuleList : unusedModuleList;

  const handleItemEdit = (item: ModuleItem) => {
    return () => {
      onEdit && onEdit(item);
    };
  };

  return (
    <List
      dataSource={moduleList}
      itemLayout="horizontal"
      renderItem={(item) => (
        <List.Item
          style={{ background: '#fff', padding: 14, marginTop: 14 }}
          actions={[
            <a key="list-loadmore-edit" onClick={handleItemEdit(item)}>
              编辑
            </a>,
          ]}
        >
          <List.Item.Meta title={<a href="https://ant.design">{item.title}</a>} description={item.desc} />
        </List.Item>
      )}
    />
  );
};
