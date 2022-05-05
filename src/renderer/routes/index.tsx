import { HashRouter, Route, Routes } from 'react-router-dom';

import { App } from '@pages/app';
import { LoginAndRegisterPage } from '@pages/login-register';
import { ROUTER } from './constants';
import { Careers } from '@pages/careers';
import { Home } from '@pages/home';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} caseSensitive>
          <Route index element={<Home />} />
          <Route path="careers" element={<Careers />} />
        </Route>
        <Route path={ROUTER.login} element={<LoginAndRegisterPage />} />
        <Route path={ROUTER.register} element={<LoginAndRegisterPage />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </HashRouter>
  );
};

export default Router;
