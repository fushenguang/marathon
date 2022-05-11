import Dexie, { Table } from 'dexie';

export interface IResume {
  id?: number;
  name: string;
  modules?: any[];
  view?: string;
  created_at?: Date;
}

export class ReumesDexie extends Dexie {
  resumes!: Table<IResume>;

  constructor() {
    super('resumes');

    this.version(1).stores({
      resumes: '++id, name, modules, view, created_at',
    });
  }
}

export const idb = new ReumesDexie();
