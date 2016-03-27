"use strict";

var googleTTS = require('..');

googleTTS('你好世界', 'zh')
.then(console.log)  // https://translate.google.com/translate_tts?...
.catch(console.error);
