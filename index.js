'use strict';

const BrowserWindow = require('browser-window');
const app = require('app');
var mainWindow = null;

require('crash-reporter').start();

app.on('window-all-closed', () => (process.platform != 'darwin') ? app.quit() : '');

app.on('ready', getMainWindow); 

function getMainWindow() {
  mainWindow = new BrowserWindow({
    'width': 1280, 
    'height': 768,
    'min-width': 400,
    'min-height': 400,
    'center': true,
    'title': 'SikhJS',
    //'title-bar-style': 'hidden-inset'
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('closed', () => mainWindow = null);
  return mainWindow;
}
