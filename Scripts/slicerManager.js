document.getElementById('folderImage').addEventListener('click', async () => {
  const filePath = await window.electronAPI.openFileDialog();
  if (filePath) {
    document.getElementById('slicerFilePath').textContent = filePath;
  } else {
    document.getElementById('slicerFilePath').textContent = 'No file selected';
  }
});
