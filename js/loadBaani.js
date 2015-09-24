'use strict';

const fs = require('fs-promise');
const md = require('markdown-it')();
const baaniLocation = function(b) { return __dirname + '/../docs/' + b + '.md' };

module.exports = function(baaniName) { 
  return new Promise(function (resolve, reject) {
    fs.readFile(baaniLocation(baaniName), 'utf8')
    .then(function(baani) { resolve(md.render(baani)); })
    .then(resolve)
    .catch(reject)
  });
};
