const fs = require('fs');
const path = require('path');

const config = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.eslintrc.json'), 'utf-8'),
);

module.exports = config;
