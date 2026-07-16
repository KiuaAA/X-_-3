// Example: get paths from main process
async function initPaths() {
  const minecraftPath = await window.electronAPI.getMinecraftPath();
  const javaPath = await window.electronAPI.getJavaPath();
  console.log('Minecraft path:', minecraftPath);
  console.log('Java path:', javaPath);
}

// Example: show a dialog
async function showMessage(title, message) {
  await window.electronAPI.showDialog({
    type: 'info',
    title: title,
    message: message,
  });
}

// Offline account button
document.getElementById('offline-login').addEventListener('click', () => {
  showMessage('Offline Account', 'Offline account feature not yet implemented.');
});

// Microsoft account button
document.getElementById('microsoft-login').addEventListener('click', () => {
  showMessage('Microsoft Account', 'Microsoft account login not yet implemented.');
});

// Mod manager button
document.getElementById('mod-manager-btn').addEventListener('click', () => {
  showMessage('Mod Manager', 'Mod manager not yet implemented.');
});

// Launch button
document.getElementById('launch-btn').addEventListener('click', () => {
  showMessage('Launch', 'Launch logic not yet implemented.');
});

// Initialize
initPaths();
