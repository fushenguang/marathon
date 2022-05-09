import events from 'events';
import { ipcMain, ipcRenderer, webContents } from 'electron';

class BusEvents {
  private instance;

  constructor() {
    this.instance = new events.EventEmitter();
    this.instance.setMaxListeners(Infinity);
    this.initEventPipe();
  }

  emit(eventName: string, ...eventArgs: any[]) {
    this.instance.emit(eventName, eventArgs);

    if (ipcMain) {
      webContents.getAllWebContents().forEach((wc) => {
        wc.send('__eventPipe', {
          eventName,
          eventArgs,
        });
      });
    }

    if (ipcRenderer) {
      ipcRenderer.invoke('__eventPipe', { eventName, eventArgs });
    }
  }

  on(eventName: string, callback: VoidFunction) {
    this.instance.on(eventName, callback);
  }

  initEventPipe() {
    if (ipcRenderer) {
      ipcRenderer.on('__eventPipe', (_, { eventName, eventArgs }) => {
        this.instance.emit(eventName, eventArgs);
      });
    }

    if (ipcMain) {
      ipcMain.handle('__eventPipe', (e, { eventName, eventArgs }) => {
        this.instance.emit(eventName, eventArgs);

        webContents.getAllWebContents().forEach((wc) => {
          if (wc.id !== e.sender.id) {
            wc.send('__eventPipe', {
              eventName,
              eventArgs,
            });
          }
        });
      });
    }
  }
}

export const busEvents = new BusEvents();
