'use strict';
const fs = require('fs')

let raags = JSON.parse(fs.readFileSync('../raags.json'));

raags.forEach(raag => fs.writeFileSync(`${raag.id}.json`, JSON.stringify(raag, null, 2), 'utf-8'));
