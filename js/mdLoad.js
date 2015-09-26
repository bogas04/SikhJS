'use strict';

const fs = require('fs-promise');
const baanies = require('./baanies');
const md = require('markdown-it')({
  linkify: false 
});

// Generates the location of baani based on its name
//const baaniLocation = function(b) { return __dirname + '/../docs/unicode/' + b + '.md' };
const baaniLocation = function(b) { return __dirname + '/../docs/' + b + '.md' };

var mdLoad = {
  // Returns a promise which itself returns the promise give by readFile
  file: (nameWithLocation) => new Promise(
    (resolve, reject) => fs.readFile(nameWithLocation, 'utf8')
    .then(b => resolve(md.render(b))).catch(reject)
  ),
  // Calls mdLoad.file function with the given baani name with some checking
  baani: (name) => baanies.indexOf(name) > -1 && mdLoad.file(baaniLocation(name))
};

module.exports = mdLoad;
