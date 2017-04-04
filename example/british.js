"use strict";

var googleTTS = require('..');

googleTTS('Hello World', 'en-gb')
.then(function (url) {
  console.log(url);
})
.catch(function (err) {
  console.error(err.stack);
});
