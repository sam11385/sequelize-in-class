const express = require('express');
const app = express();
const models = require('./models');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Artist name?\n', nameOfArtist => {
  models.artist.create({ artist_name: nameOfArtist }).then(function(artist) {
    console.log(`Successfully created ${nameOfArtist}`);
  });
  readline.close();
});
