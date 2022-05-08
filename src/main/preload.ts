import { contextBridge, ipcRenderer, IpcRendererEvent, OpenDialogOptions } from 'electron';

export type CallbackFunc = (...args: any[]) => void;

const validOnceChannels = ['ipc-example', 'screen-recording'] as const;

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    startScreenRecording() {
      ipcRenderer.send('screen-recording');
    },
    printToPDF() {
      ipcRenderer.send('print-to-pdf');
    },
    on(channel: string, func: CallbackFunc) {
      const validChannels = ['ipc-example'];

      if (validChannels.includes(channel)) {
        const subscription = (_event: IpcRendererEvent, ...args: any[]) => func(...args);

        // Deliberately strip event as it includes `sender`(译：刻意去除event，由于它包含"sender")
        ipcRenderer.on(channel, subscription);

        return () => ipcRenderer.removeListener(channel, subscription);
      }

      return;
    },
    once(channel: typeof validOnceChannels[number], func: CallbackFunc) {
      if (validOnceChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (_event, ...args) => func(...args));
      }
    },
  },
  dialog: {
    async show(options: OpenDialogOptions) {
      return ipcRenderer.send('open-dialog', options);
    },
  },
  store: {
    get(val: any) {
      return ipcRenderer.sendSync('store-get', val);
    },
    set(property: string, val: any) {
      ipcRenderer.send('store-set', property, val);
    },
    delete(property: string) {
      ipcRenderer.send('store-delete', property);
    },
  },
});
