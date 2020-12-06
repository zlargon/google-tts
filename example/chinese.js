const googleTTS = require('../dist/index');

const url = googleTTS.getAudioUrl('你好世界', { lang: 'zh-TW' });
console.log(url); // https://translate.google.com/translate_tts?...
