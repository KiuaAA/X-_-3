const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

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

// Get Minecraft installation path
ipcMain.handle('get-minecraft-path', () => {
  return path.join(__dirname, '..', 'Minecraft');
});

// Get Java Runtime path
ipcMain.handle('get-java-path', () => {
  const javaDir = path.join(__dirname, '..', 'Java-Runtime');
  return javaDir;
});

// Show a dialog
ipcMain.handle('show-dialog', async (event, options) => {
  const result = await dialog.showMessageBox(mainWindow, options);
  return result;
});});

// Example: get Java Runtime path
ipcMain.handle('get-java-path', () => {
  const javaDir = path.join(__dirname, '..', 'Java-Runtime');
  return javaDir;
});

// Example: show a dialog
ipcMain.handle('show-dialog', async (event, options) => {
  const result = await dialog.showMessageBox(mainWindow, options);
  return result;
});

// Download Minecraft version
ipcMain.handle('download-minecraft', async (event, version) => {
  try {
    await downloadMinecraft(version);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

// Download Java Runtime
ipcMain.handle('download-java-runtime', async () => {
  try {
    await downloadJavaRuntime();
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

// Download libraries
ipcMain.handle('download-libs', async () => {
  try {
    await downloadLibs();
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
});
