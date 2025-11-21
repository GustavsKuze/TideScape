document.getElementById('folderImage').addEventListener('click', async () => {
  const filePath = await window.electronAPI.openFileDialog();
  if (filePath) {
    document.getElementById('file-path').textContent = filePath;
  } else {
    document.getElementById('file-path').textContent = 'No file selected';
  }
});
