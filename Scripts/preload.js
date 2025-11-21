const { contextBridge, ipcRenderer } = require('electron');

// File Explorer
contextBridge.exposeInMainWorld('electronAPI', {
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog')
});
