export const ROUTER = {
  boot: '/boots',
  app: '/',
  login: '/login',
  register: '/register',
  careers: '/careers',
  resumes: '/resumes',
  resumeEdit: '/resumes/edit',
};

export const ROUTER_LIST = Object.values(ROUTER);

export const ROUTER_KEYS = {
  app: 'app',
  boot: 'boot',
  login: 'login',
  register: 'register',
  careers: 'careers',
  resumes: 'resumes',
  resumeEdit: 'resumeEdit',
};

export const ROUTER_ENTRY: IRouter.Item[] = [
  {
    url: ROUTER.boot,
    key: ROUTER_KEYS.boot,
    text: '启动页',
  },
  {
    url: ROUTER.app,
    key: ROUTER_KEYS.app,
    text: '首页',
  },
  {
    url: ROUTER.resumes,
    key: ROUTER_KEYS.resumes,
    text: '简历管理',
  },
  {
    url: ROUTER.resumeEdit,
    key: ROUTER_KEYS.resumeEdit,
    text: '简历编辑',
  },
  {
    url: ROUTER.careers,
    key: ROUTER_KEYS.careers,
    text: '职业生涯',
  },
];
