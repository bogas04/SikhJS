'use strict';
const fs = require('fs')

let authors = JSON.parse(fs.readFileSync('../authors.json'));

authors.forEach(author => fs.writeFileSync(`${author.id}.json`, JSON.stringify(author, null, 2), 'utf-8'));


