const { contextBridge, ipcRenderer } = require('electron');
const path = require('path');

contextBridge.exposeInMainWorld('electronAPI', {
  // File Explorer
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  openPathInExplorer: (path) => ipcRenderer.send('open-path-in-explorer', path),
  resolvePath: (...segments) => path.join(__dirname, ...segments),

  // New Window
  createMainWindow: () => ipcRenderer.send('open-main-window'),
  createSlicerWindow: () => ipcRenderer.send('open-slicer-window')
});

// New Window
