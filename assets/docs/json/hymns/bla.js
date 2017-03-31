'use strict';

const fs = require('fs');
const request = require('request');

const doFor = i => request(`http://api.sikher.com/hymn/${i}`, (err, response, body) => {
  if (err) {
    throw err;
  } else {
    fs.writeFile(`Hymn ${i}.json`, body, 'utf-8', () => {
      console.log(`\r\r\r\r\r\r${i}/3620`);
      if (i !== 3620) {
        doFor(i + 1);
      }
    });
  }
});

doFor(1);

