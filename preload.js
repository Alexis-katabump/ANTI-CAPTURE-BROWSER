const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  navigate: (url) => ipcRenderer.send('navigate', url),
  goBack: () => ipcRenderer.send('go-back'),
  goForward: () => ipcRenderer.send('go-forward'),
  refresh: () => ipcRenderer.send('refresh'),
  goHome: () => ipcRenderer.send('go-home'),

  onUpdateUrl: (callback) => {
    ipcRenderer.on('update-url', (event, url) => callback(url));
  }
});
