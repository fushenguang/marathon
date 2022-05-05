export const ROUTER = {
  app: '/',
  login: '/login',
  register: '/register',
  careers: '/careers',
};

export const ROUTER_KEYS = {
  app: 'app',
  login: 'login',
  register: 'register',
  careers: 'careers',
};

export const ROUTER_ENTRY: IRouter.Item[] = [
  {
    url: ROUTER.app,
    key: ROUTER_KEYS.app,
    text: '首页',
  },
  {
    url: ROUTER.careers,
    key: ROUTER_KEYS.careers,
    text: '职业生涯',
  },
];
