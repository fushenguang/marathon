import { useState, useRef } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';

import { ResumeContainer, ResumeHeader, ResumeMain, ResumeView, ResumeModules, ModuleTitle } from './styles';
import { ModuleList } from '../components/module-list';
import { ModuleBase } from '../components/module-base';

export const ResumeEdit = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState('');
  const [editModuleName, setEditModuleName] = useState('');
  const navigate = useNavigate();
  const mainRef = useRef<HTMLDivElement | null>(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleModuleEdit = (moduleName: string, moduleTitle: string) => {
    setIsVisible(true);
    setEditModuleName(moduleName);
    setDrawerTitle(moduleTitle);
  };

  const handleEditModuleSuccess = (values: Record<keyof NResume.Profile, any>) => {
    setIsVisible(false);
    console.log(values);
  };

  const handleCloseDrawer = () => {
    setIsVisible(false);
  };

  return (
    <ResumeContainer>
      <ResumeHeader>
        <ArrowLeftOutlined
          title="返回上一页"
          onClick={handleBack}
          style={{ fontSize: 18, padding: '12px 15px', cursor: 'pointer' }}
        />

        <div>
          <Button type="link">保存</Button>
          <Button type="link">预览</Button>
          <Button type="link">导出PDF</Button>
        </div>
      </ResumeHeader>
      <ResumeMain ref={mainRef}>
        <ResumeModules>
          <ModuleTitle>
            <p>已添加模块</p>
          </ModuleTitle>
          <ModuleList moduleType="using" onEdit={handleModuleEdit} />
          <ModuleTitle style={{ marginTop: '1.6rem' }}>
            <p>我的模块</p>
          </ModuleTitle>
          <ModuleList moduleType="unused" />
        </ResumeModules>
        <ResumeView />
        <Drawer
          title={drawerTitle ? `编辑 · ${drawerTitle}` : ''}
          maskClosable={false}
          headerStyle={{ height: 64 }}
          closable={false}
          visible={isVisible}
          width="50%"
          onClose={handleCloseDrawer}
        >
          {editModuleName === 'basicInfo' && (
            <ModuleBase onSuccess={handleEditModuleSuccess} onCancel={handleCloseDrawer} />
          )}
        </Drawer>
      </ResumeMain>
    </ResumeContainer>
  );
};
