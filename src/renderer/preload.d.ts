import type { CallbackFunc } from '../main/preload';
import type { OpenDialogOptions } from 'electron';

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        myPing: VoidFunction;
        startScreenRecording: VoidFunction;
        printToPDF: VoidFunction;
        on: (channel: string, func: CallbackFunc) => VoidFunction | undefined;
        once: (channel: string, func: CallbackFunc) => void;
      };
      store: {
        get: (key: string) => any;
        set: (key: string, val: any) => void;
        delete: (key: string) => void;
      };
      knex: {
        insert: (tableName: string, data: Record<string, any>) => Promise<any>;
        where: (tableName: string, query?: Record<string, any>) => Promise<any>;
      };
      dialog: {
        show: (options: OpenDialogOptions) => any;
      };
    };
  }
}

export {};
