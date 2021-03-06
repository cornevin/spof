const electron = require('electron')
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const {ipcMain} = require('electron');
const ego = require('./oauth');
const auth = ego();
const window = electron.BrowserWindowProxy;


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {

  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1100, height: 800});

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


ipcMain.on('log', (event, arg) => {
  auth.getAccessToken(
    ['https://mail.google.com/', 'https://www.googleapis.com/auth/gmail.modify', 'https://www.googleapis.com/auth/gmail.readonly',
     'https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/plus.login'],
    '418075898361-94el432gkcdfrf99qpgig1hfoqj2riuo.apps.googleusercontent.com',
    '7j8RLmnuMildnbxlrbM-ON_P',
    undefined).then(token =>
      {
        event.sender.send('asynchronous-reply', token);
      }).catch(err => {
        process.stderr.write(err.message + '\n');
      });
})


ipcMain.on('share', (event, arg) => {
  if(arg.name) {
    let win = new BrowserWindow({width: 800, height: 800})
    win.loadURL('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=someone@example.com&su=' + arg.name + '&body=BODY&tf=1')
  }
})