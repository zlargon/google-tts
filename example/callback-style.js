'use strict';

var googleTTSPromise = require('..');

function googleTTS (param, callback) {
  googleTTSPromise(param.text, param.lang, param.speed)
  .then(function (url) {
    callback(null, url);
  })
  .catch(function (e) {
    callback(e);
  });
}

googleTTS({ text: 'Hello World' }, function (err, url) {
  if (err) {
    console.error(err.stack);
  } else {
    console.log(url);
  }
});
