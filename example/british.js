"use strict";

var googleTTS = require('..');

googleTTS('Hello Britain', 'en', 1, 1000, 'uk')   // speed normal = 1 (default), slow = 0.24
.then(function (url) {
  console.log(url); // https://translate.google.co.uk/translate_tts?...
})
.catch(function (err) {
  console.error(err.stack);
});
