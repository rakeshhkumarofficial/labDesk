const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    title:"Lap Desktop",
    width: 1280,
    height: 860,
  })

 // win.webContents.openDevTools();
  // const startUrl = url.format({
  //   pathname: path.join(__dirname, './lab-app/build/index.html'),
  //   protocol: 'file',
  // });
  win.loadFile('./lab-app/build/index.html')
 // win.loadURL(startUrl);
}
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})