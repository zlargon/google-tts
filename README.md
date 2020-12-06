# google-tts

Google TTS (Text-To-Speech) for node.js

[![][npm-img]][npm-url]

[![][dependency-img]][dependency-url]
[![][dependency-dev-img]][dependency-dev-url]
[![][install-size-img]][install-size-result]

[![][travis-img]][travis-url]
[![][coverage-img]][coverage-url]

## Installation

```
$ npm install --save google-tts-api
```

## Change Log

Please see [CHANGELOG](https://github.com/zlargon/google-tts/blob/master/CHANGELOG.md).

## Usage

```js
const googleTTS = require('google-tts-api');

// get audio URL
const url = googleTTS.getAudioUrl('Hello World', { lang: 'en-US', slow: false });
console.log({ url }); // https://translate.google.com/translate_tts?...
```

```js
const fs = require('fs');
const googleTTS = require('google-tts-api');

// get base64 text
googleTTS
  .getAudioBase64('Hello World', { lang: 'en-US', slow: false })
  .then((base64) => {
    console.log({ base64 });

    // save the audio file
    const buffer = Buffer.from(base64, 'base64');
    fs.writeFileSync('hello-world-english.mp3', buffer, { encoding: 'base64' });
  })
  .catch(console.error);
```

[More Example](https://github.com/zlargon/google-tts/tree/master/example)

## Limitation

Google Text-To-Speech API (for free) can not deal with texts which are over than 200 characters. ([#5](https://github.com/zlargon/google-tts/issues/5))

## Language Support

You can find suitable `languageCode` from [Google Document](https://cloud.google.com/speech/docs/languages).

## License

MIT

[npm-url]: https://nodei.co/npm/google-tts-api
[npm-img]: https://nodei.co/npm/google-tts-api.png
[install-size-img]: https://packagephobia.com/badge?p=google-tts-api
[install-size-result]: https://packagephobia.com/result?p=google-tts-api
[dependency-url]: https://david-dm.org/zlargon/google-tts
[dependency-img]: https://img.shields.io/david/zlargon/google-tts.svg
[dependency-dev-url]: https://david-dm.org/zlargon/google-tts#info=devDependencies
[dependency-dev-img]: https://img.shields.io/david/dev/zlargon/google-tts.svg
[travis-url]: https://travis-ci.com/zlargon/google-tts
[travis-img]: https://img.shields.io/travis/com/zlargon/google-tts
[coverage-url]: https://coveralls.io/github/zlargon/google-tts
[coverage-img]: https://img.shields.io/coveralls/github/zlargon/google-tts
