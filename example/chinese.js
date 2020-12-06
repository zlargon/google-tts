const googleTTS = require('../dist/index');

googleTTS('你好世界', 'zh')
  .then(console.log) // https://translate.google.com/translate_tts?...
  .catch(console.error);
