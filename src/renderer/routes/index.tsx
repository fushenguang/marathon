import { HashRouter, Route, Routes } from 'react-router-dom';

import { App } from '@pages/app';
import { Boot } from '@pages/boot';
import { LoginAndRegisterPage } from '@pages/login-register';
import { ROUTER } from './constants';
import { Careers } from '@pages/careers';
import { ResumeManage } from '@pages/resume-manage';
import { ResumeEdit } from '@pages/resume-manage/resumes';
import { Home } from '@pages/home';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/boot" element={<Boot />} />
        <Route path="/" element={<App />} caseSensitive>
          <Route index element={<Home />} />
          <Route path={ROUTER.careers} element={<Careers />} />
          <Route path={ROUTER.resumes} element={<ResumeManage />} />
          <Route path={ROUTER.resumeEdit} element={<ResumeEdit />} />
        </Route>
        <Route path={ROUTER.login} element={<LoginAndRegisterPage />} />
        <Route path={ROUTER.register} element={<LoginAndRegisterPage />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </HashRouter>
  );
};

export default Router;
