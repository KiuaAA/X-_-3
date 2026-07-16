const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getMinecraftPath: () => ipcRenderer.invoke('get-minecraft-path'),
  getJavaPath: () => ipcRenderer.invoke('get-java-path'),
  showDialog: (options) => ipcRenderer.invoke('show-dialog', options),
});
