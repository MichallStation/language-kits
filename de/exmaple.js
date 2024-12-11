// const wordPairs = require('./WordPairs.json');
const fs = require('fs');
const path = require('path');
const wordPairs = require('./WordPairs copy.json');
const added = require('./added.json');

const re = wordPairs.filter(
  ({ word1, word2 }) => word1.toLowerCase() !== word2.toLocaleLowerCase()
);
// console.log(re.length);
// fs.writeFileSync('./WordPairs copy.json', JSON.stringify(re));
