'use strict';

const fs = require('fs-promise');
const md = require('markdown-it')();
const baaniLocation = function(b) { return __dirname + '/../docs/' + b + '.md' };

var mdLoad = {
  file: (nameWithLocation) => new Promise(
    (resolve, reject) => fs.readFile(nameWithLocation, 'utf8')
    .then(b => resolve(md.render(b))).catch(reject)
  ),
  baani: (name) => mdLoad.file(baaniLocation(name))
};

module.exports = mdLoad;
