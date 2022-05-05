import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Router from '../routes/index';
import { store } from '../store';
import 'antd/dist/antd.css';
import '@assets/styles/global.scss';

const container = document.getElementById('root')!;

const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
