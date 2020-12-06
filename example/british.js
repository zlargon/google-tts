const googleTTS = require('..');

googleTTS('Hello World', 'en-gb')
  .then((url) => {
    console.log(url);
  })
  .catch((err) => {
    console.error(err.stack);
  });
