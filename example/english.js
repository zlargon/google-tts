const googleTTS = require('..');

googleTTS('Hello World', 'en', 1) // speed normal = 1 (default), slow = 0.24
  .then((url) => {
    console.log(url); // https://translate.google.com/translate_tts?...
  })
  .catch((err) => {
    console.error(err.stack);
  });
