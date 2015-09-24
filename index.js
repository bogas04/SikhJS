'use strict';

var BrowserWindow = require('browser-window');
var app = require('app');
var mainWindow = null;

require('crash-reporter').start();

app.on('window-all-closed', () => (process.platform != 'darwin') ? app.quit() : '');

app.on('ready', getMainWindow); 

function getMainWindow() {
  mainWindow = new BrowserWindow({
    'width': 800, 
    'height': 600,
    'min-width': 400,
    'min-height': 400,
    'center': true,
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', () => mainWindow = null);
  return mainWindow;
}
