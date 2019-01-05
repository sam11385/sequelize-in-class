const express = require('express');
const app = express();

const models = require('./models');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Album name?\n', nameOfAlbum => {
  rl.question('Album year?\n', yearOfAlbum => {
    rl.question('Artist ID?\n', idOfArtist => {
      models.album
        .create({
          artist_id: idOfArtist,
          album_name: nameOfAlbum,
          album_year: yearOfAlbum
        })
        .then(function(album) {
          console.log('Successfully created album');
        });
      rl.close();
    });
  });
});
