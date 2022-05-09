import { nanoid } from 'nanoid';

export interface ModuleItem<T = any> {
  id: string;
  moduleName: string;
  title: string;
  desc: string;
  detail: T;
}

export type ModuleBaseItem = ModuleItem<NResume.Profile | NResume.Contact>;

export const DEFAULT_USED_MODULES: [ModuleBaseItem] = [
  {
    id: nanoid(8),
    moduleName: 'basicInfo',
    title: '基本信息',
    desc: '描述个人信息',
    detail: {
      username: 'fujia',
      phone: '185-xxxx-xxx',
      email: 'fujia.site@outlook.com',
    },
  },
];

export const BASE_FORM_FIELDS: Record<
  keyof NResume.Profile,
  {
    label: string;
    field: string;
  }
> = {
  avatar: {
    label: '头像',
    field: 'avatar',
  },
  username: {
    label: '姓名',
    field: 'username',
  },
  area: {
    label: '地区',
    field: 'area',
  },
  major: {
    label: '专业',
    field: 'major',
  },
  degree: {
    label: '学位',
    field: 'degree',
  },
  hometown: {
    label: '籍贯',
    field: 'hometown',
  },
  political: {
    label: '政治面貌',
    field: 'political',
  },
};
