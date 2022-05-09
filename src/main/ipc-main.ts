import path from 'path';
import fs from 'fs';
import { ipcMain, dialog, desktopCapturer, webContents, app } from 'electron';
import EStore from 'electron-store';

import { busEvents } from '@common/bus-events';

export const eStore = new EStore();

export function injectIpcMainEvents() {
  ipcMain.on('ipc-example', async (event, arg) => {
    const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
    console.log(msgTemplate(arg));
    event.reply('ipc-example', msgTemplate('pong'));
  });

  ipcMain.on('screen-recording', async (event) => {
    const sources = await desktopCapturer.getSources({
      types: ['window', 'screen'],
    });

    for (const source of sources) {
      if (source.name === 'Entire Screen') {
        event.reply('screen-recording', source.id);
      }
    }
  });

  ipcMain.on('print-to-pdf', async (event) => {
    const focusedWebContents = webContents.getFocusedWebContents();
    const data = await focusedWebContents.printToPDF({});
    const fileObject = await dialog.showSaveDialog({
      title: '保存为PDF',
      defaultPath: app.getPath('documents'),
      filters: [
        {
          name: 'pdf',
          extensions: ['pdf'],
        },
      ],
    });
    if (!fileObject.filePath) return;

    fs.writeFile(fileObject.filePath, data, (error: any) => {
      if (error) throw error;
      console.log('saved successful!');
    });
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

  busEvents.on('eventName', (...args: any[]) => {
    console.log('busEvents', args);
  });
}
