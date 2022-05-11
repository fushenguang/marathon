import { Tabs, Button } from 'antd';
import { FilePdfOutlined, SnippetsOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';

import { ResumeContainer, ResumeMain } from './styles';
import { ROUTER } from '@routes/constants';
import { idb } from '@db/idb';

const { TabPane } = Tabs;

type NewSubjectType = 'resume' | 'template';

export const ResumeManage = () => {
  const navigate = useNavigate();

  const resumes = useLiveQuery(() => idb.resumes.toArray());

  const handleLink = (val: NewSubjectType) => () => {
    if (val === 'resume') {
      navigate(ROUTER.resumeEdit);
    }
  };
  const renderExtra = () => {
    return (
      <div>
        <Button type="link" size="small" onClick={handleLink('resume')}>
          新建简历
        </Button>
        <Button type="link" size="small" onClick={handleLink('template')}>
          新建模板
        </Button>
      </div>
    );
  };

  return (
    <ResumeContainer>
      <ResumeMain>
        <Tabs defaultActiveKey="resumes" tabBarExtraContent={renderExtra()}>
          <TabPane
            tab={
              <span>
                <FilePdfOutlined />
                我的简历
              </span>
            }
            key="resumes"
          >
            <ul>
              {resumes?.map((resume) => (
                <li key={resume.id}>
                  <p>名称: {resume.name}</p>
                  <p>创建时间: {resume.created_at?.toLocaleTimeString()}</p>
                </li>
              ))}
            </ul>
          </TabPane>
          <TabPane
            tab={
              <span>
                <SnippetsOutlined />
                简历模板
              </span>
            }
            key="templates"
          >
            简历模板
          </TabPane>
        </Tabs>
      </ResumeMain>
    </ResumeContainer>
  );
};
