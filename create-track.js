const express = require('express');
const app = express();
const models = require('./models');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Track name?\n', nameOfTrack => {
  readline.question('Album Id?\n', idOfAlbum => {
    readline.question('Duration of song in seconds?\n', lenOfSong => {
      models.track
        .create({
          track_name: nameOfTrack,
          track_duration: lenOfSong,
          albumId: idOfAlbum
        })
        .then(function(track) {
          console.log(`Successfully created ${nameOfTrack}`);
        });

      readline.close();
    });
  });
});
