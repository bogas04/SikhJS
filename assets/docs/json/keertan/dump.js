var fs = require('fs');

var json = [];
json = fs.readdirSync(__dirname)
.filter(e => e !== 'dump.js')
.reduce((arr, value) => json = [ ...json, ...JSON.parse(fs.readFileSync(__dirname + '/' + value, 'utf8')) ], []);

fs.writeFileSync(__dirname + '/' + 'keertan.json', JSON.stringify(json));
