'use strict';
const fs = require('fs')

let authors = JSON.parse(fs.readFileSync('author.json'));

authors.forEach(author => fs.writeFileSync(`authors/${author.id}.json`, JSON.stringify(author, null, 2), 'utf-8'));


