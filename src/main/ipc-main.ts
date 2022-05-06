import { ipcMain, dialog } from 'electron';
import EStore from 'electron-store';

export const eStore = new EStore();

export function injectIpcMainEvents() {
  ipcMain.on('ipc-example', async (event, arg) => {
    const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
    console.log(msgTemplate(arg));
    event.reply('ipc-example', msgTemplate('pong'));
  });

  ipcMain.on('store-get', async (event, val) => {
    event.returnValue = eStore.get(val);
  });

  ipcMain.on('store-set', async (_event, key, val) => {
    eStore.set(key, val);
  });

  ipcMain.on('store-delete', async (_event, key) => {
    eStore.delete(key);
  });

  ipcMain.on('open-dialog', async (_event, options) => {
    const filePath = await dialog.showOpenDialog(options);
    console.log(filePath);
  });
}
