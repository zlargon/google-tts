# google-tts

Google TTS (Text-To-Speech) for node.js

[![Dependency Status](https://david-dm.org/zlargon/google-tts.svg)](https://david-dm.org/zlargon/google-tts)
[![devDependency Status](https://david-dm.org/zlargon/google-tts/dev-status.svg)](https://david-dm.org/zlargon/google-tts#info=devDependencies)

[![Travis Status](https://travis-ci.org/zlargon/google-tts.svg)](https://travis-ci.org/zlargon/google-tts)
[![Appveyor status](https://ci.appveyor.com/api/projects/status/fa19gog5ho3bdhvm?svg=true)](https://ci.appveyor.com/project/zlargon/google-tts)
[![Coverage Status](https://coveralls.io/repos/github/zlargon/google-tts/badge.svg?branch=master)](https://coveralls.io/github/zlargon/google-tts?branch=master)

## Example

``` js
var googleTTS = require('google-tts');

googleTTS('Hello World', 'en', 1)   // speed normal = 1 (default), slow = 0.24
.then(function (url) {
  console.log(url); // https://translate.google.com/translate_tts?...
})
.catch(function (err) {
  console.error(err.stack);
});
```

## License

MIT
