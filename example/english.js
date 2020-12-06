const fs = require('fs');
const googleTTS = require('../dist/index');

// 1. get audio URL
const url = googleTTS.getAudioUrl('Hello World', { lang: 'en-US', slow: false });
console.log({ url }); // https://translate.google.com/translate_tts?...

// 2. get base64 text
googleTTS
  .getAudioBase64('Hello World', { lang: 'en-US', slow: false })
  .then((base64) => {
    console.log({ base64 });

    // save the audio file
    const buffer = Buffer.from(base64, 'base64');
    fs.writeFileSync('hello-world-english.mp3', buffer, { encoding: 'base64' });
  })
  .catch(console.error);
