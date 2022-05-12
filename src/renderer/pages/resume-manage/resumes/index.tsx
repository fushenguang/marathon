import { useCallback, useState, useRef, useEffect } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { IndexableType } from 'dexie';

// import { useAppDispatch } from '@store/hooks';
import { ResumeContainer, ResumeHeader, ResumeMain, ResumeView, ResumeModules, ModuleTitle } from './styles';
import { ModuleList } from '../components/module-list';
import { ModuleBase } from '../components/module-base';
// import { setUsedModuleList } from '../resume.slice';
import { ModuleBaseItem, ModuleItem, MODULE_BASE_NAME } from '../constants/resume-modules';
import { idb } from '@db/idb';

export const ResumeEdit = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState('');
  const [editModuleName, setEditModuleName] = useState('');
  const [searchParams] = useSearchParams();
  const [resumeIndexableId, setResumeIndexableId] = useState<IndexableType | null>(null);
  const navigate = useNavigate();
  const params = useParams<{ resumeId: string }>();

  const resumeMode = useRef(searchParams.get('mode') as 'edit' | 'create');

  const handleBack = () => {
    navigate(-1);
  };

  const newResume = useCallback(async (params?: { resumeName: string; created_at?: Date }) => {
    console.log('create new resume successfully...');
    const { resumeName = 'unnamed', created_at = new Date() } = params || {};
    try {
      const id = await idb.resumes.add({ name: resumeName, created_at });
      setResumeIndexableId(id);
    } catch (error) {
      console.log(`Failed to add ${resumeName}: ${error}`);
    }
  }, []);

  const readResumeById = async () => {
    const { resumeId } = params || {};

    if (!resumeId) return;

    try {
      const detail = await idb.resumes.get(Number(resumeId));
      console.log('detail', detail);
    } catch (error) {
      console.log(`Failed to read resume: ${error}`);
    }
  };

  const handleModuleEdit = (item: ModuleItem) => {
    setIsVisible(true);
    setEditModuleName(item.moduleName);
    setDrawerTitle(item.title);
  };

  const handleEditModuleSuccess = (values: Partial<ModuleBaseItem>) => {
    setIsVisible(false);
    console.log(values);
  };

  const handleCloseDrawer = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (resumeMode.current === 'create') {
      newResume();
    }

    if (resumeMode.current === 'edit') {
      readResumeById();
    }
  }, []);

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
      <ResumeMain>
        <ResumeModules>
          <ModuleTitle>已添加模块</ModuleTitle>
          <ModuleList moduleType="using" onEdit={handleModuleEdit} />
          <ModuleTitle style={{ marginTop: '1.6rem' }}>我的模块</ModuleTitle>
          <ModuleList moduleType="unused" />
        </ResumeModules>

        <ResumeView />

        <Drawer
          title={drawerTitle ? `编辑 · ${drawerTitle}` : ''}
          maskClosable={false}
          headerStyle={{ height: 64 }}
          closable={false}
          destroyOnClose
          visible={isVisible}
          width="50%"
          onClose={handleCloseDrawer}
        >
          {editModuleName === MODULE_BASE_NAME && (
            <ModuleBase onSuccess={handleEditModuleSuccess} onCancel={handleCloseDrawer} />
          )}
        </Drawer>
      </ResumeMain>
    </ResumeContainer>
  );
};
