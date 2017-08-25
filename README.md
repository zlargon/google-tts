# google-tts

Google TTS (Text-To-Speech) for node.js

[![][npm-img]][npm-url]

[![][dependency-img]][dependency-url]
[![][dependency-dev-img]][dependency-dev-url]

[![][travis-img]][travis-url]
[![][appveyor-img]][appveyor-url]
[![][coverage-img]][coverage-url]

## Installation

```
$ npm install google-tts-api --save
```

## Change Log

Please see [CHANGELOG](https://github.com/zlargon/google-tts/blob/master/CHANGELOG.md).

## Usage

``` js
var googleTTS = require('google-tts-api');

googleTTS('Hello World', 'en', 1)   // speed normal = 1 (default), slow = 0.24
.then(function (url) {
  console.log(url); // https://translate.google.com/translate_tts?...
})
.catch(function (err) {
  console.error(err.stack);
});
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

[dependency-url]: https://david-dm.org/zlargon/google-tts
[dependency-img]: https://img.shields.io/david/zlargon/google-tts.svg

[dependency-dev-url]: https://david-dm.org/zlargon/google-tts#info=devDependencies
[dependency-dev-img]: https://img.shields.io/david/dev/zlargon/google-tts.svg

[travis-url]: https://travis-ci.org/zlargon/google-tts
[travis-img]: https://img.shields.io/travis/zlargon/google-tts.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMTQyLjUgLTE0Mi41IDI4NSAyODUiPjxjaXJjbGUgcj0iMTQxLjciIGZpbGw9IiNERDQ4MTQiLz48ZyBpZD0iYSIgZmlsbD0iI0ZGRiI%2BPGNpcmNsZSBjeD0iLTk2LjQiIHI9IjE4LjkiLz48cGF0aCBkPSJNLTQ1LjYgNjguNGMtMTYuNi0xMS0yOS0yOC0zNC00Ny44IDYtNSA5LjgtMTIuMyA5LjgtMjAuNnMtMy44LTE1LjctOS44LTIwLjZjNS0xOS44IDE3LjQtMzYuNyAzNC00Ny44bDEzLjggMjMuMkMtNDYtMzUuMi01NS4zLTE4LjctNTUuMyAwYzAgMTguNyA5LjMgMzUuMiAyMy41IDQ1LjJ6Ii8%2BPC9nPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0icm90YXRlKDEyMCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiB0cmFuc2Zvcm09InJvdGF0ZSgyNDApIi8%2BPC9zdmc%2B

[appveyor-url]: https://ci.appveyor.com/project/zlargon/google-tts
[appveyor-img]: https://img.shields.io/appveyor/ci/zlargon/google-tts.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48ZyBmaWxsPSIjMUJBMUUyIiB0cmFuc2Zvcm09InNjYWxlKDgpIj48cGF0aCBkPSJNMCAyLjI2NWw2LjUzOS0uODg4LjAwMyA2LjI4OC02LjUzNi4wMzd6Ii8%2BPHBhdGggZD0iTTYuNTM2IDguMzlsLjAwNSA2LjI5My02LjUzNi0uODk2di01LjQ0eiIvPjxwYXRoIGQ9Ik03LjMyOCAxLjI2MWw4LjY3LTEuMjYxdjcuNTg1bC04LjY3LjA2OXoiLz48cGF0aCBkPSJNMTYgOC40NDlsLS4wMDIgNy41NTEtOC42Ny0xLjIyLS4wMTItNi4zNDV6Ii8%2BPC9nPjwvc3ZnPg==

[coverage-url]: https://coveralls.io/r/zlargon/google-tts
[coverage-img]: https://img.shields.io/coveralls/zlargon/google-tts.svg
