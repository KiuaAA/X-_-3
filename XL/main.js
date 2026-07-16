const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: path.join(__dirname, 'assets/icon.png'), // optional
  });

  mainWindow.loadFile(path.join(__dirname, 'renderer/index.html'));

  // Open DevTools in development
  if (process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Example: get Minecraft installation path
ipcMain.handle('get-minecraft-path', () => {
  return path.join(__dirname, '..', 'Minecraft');
});

// Example: get Java Runtime path
ipcMain.handle('get-java-path', () => {
  const javaDir = path.join(__dirname, '..', 'Java-Runtime');
  // You'd want to scan for bin/java or bin/java.exe
  return javaDir;
});

// Example: show a dialog
ipcMain.handle('show-dialog', async (event, options) => {
  const result = await dialog.showMessageBox(mainWindow, options);
  return result;
});
