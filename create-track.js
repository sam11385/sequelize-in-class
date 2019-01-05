const express = require('express');
const app = express();

const models = require('./models');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Album name?', function(answer) {
  console.log(`Album ${answer} recorded`);
});
