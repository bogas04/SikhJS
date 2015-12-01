'use strict';

var fs = require('fs-promise');
var baanies = require('./baanies');
var md = require('markdown-it')({
  linkify: false
});

// Generates the location of baani based on its name
//const baaniLocation = function(b) { return __dirname + '/../docs/unicode/' + b + '.md' };
var baaniLocation = function baaniLocation(b) {
  return __dirname + '/../../docs/' + b + '.md';
};

var mdLoad = {
  // Returns a promise which itself returns the promise give by readFile
  file: function file(nameWithLocation) {
    return new Promise(function (resolve, reject) {
      return fs.readFile(nameWithLocation, 'utf8').then(function (b) {
        return resolve(md.render(b));
      }).catch(reject);
    });
  },
  // Calls mdLoad.file function with the given baani name with some checking
  baani: function baani(name) {
    return mdLoad.file(baaniLocation(name));
  }
};

module.exports = mdLoad;