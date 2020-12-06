const googleTTS = require('../dist/index');

googleTTS('Hello World', 'en-gb')
  .then((url) => {
    console.log(url);
  })
  .catch((err) => {
    console.error(err.stack);
  });
