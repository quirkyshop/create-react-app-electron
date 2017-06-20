const rimraf = require('rimraf');
const fs = require('fs');
const path = require('path');

// copy file to build
rimraf.sync(path.join(__dirname, '../dist/*'));
fs.createReadStream('main.js').pipe(fs.createWriteStream('build/main.js'));