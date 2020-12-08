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

### 1. `getAudioUrl(text, [option])`

- Available options: `lang`, `slow`, `host`

<details><summary>See Example</summary>
<p>

```js
const googleTTS = require('google-tts-api');

// get audio URL
const url = googleTTS.getAudioUrl('Hello World', {
  lang: 'en-US',
  slow: false,
  host: 'https://translate.google.com',
});
console.log(url); // https://translate.google.com/translate_tts?...
```

</p>
</details>
<br/>

### 2. `getAudioBase64(text, [option])`

- This is a promise function
- Available options: `lang`, `slow`, `host`, `timeout`

<details><summary>See Example</summary>
<p>

```js
const googleTTS = require('google-tts-api');

// get base64 text
googleTTS
  .getAudioBase64('Hello World', {
    lang: 'en-US',
    slow: false,
    host: 'https://translate.google.com',
    timeout: 10000,
  })
  .then(console.log) // base64 text
  .catch(console.error);
```

</p>
</details>
<br/>

### 3. `getAllAudioUrl(text, [option])` (For text longer than 200 characters)

- Available options: `lang`, `slow`, `host`, `splitPunct`

<details><summary>See Example</summary>
<p>

```js
const googleTTS = require('google-tts-api');

const results = googleTTS.getAllAudioUrls('LONG_TEXT_...', {
  lang: 'en-US',
  slow: false,
  host: 'https://translate.google.com',
  splitPunct: ',.?',
});
console.log(results);
// [
//   { text: '...', url: '...' },
//   { text: '...', url: '...' },
//   ...
// ];
```

</p>
</details>
<br/>

### 4. `getAllAudioBase64(text, [option])` (For text longer than 200 characters)

- This is a promise function
- Available options: `lang`, `slow`, `host`, `timeout`, `splitPunct`

<details><summary>See Example</summary>
<p>

```js
const googleTTS = require('google-tts-api');

googleTTS
  .getAllAudioBase64('LONG_TEXT_...', {
    lang: 'en-US',
    slow: false,
    host: 'https://translate.google.com',
    timeout: 10000,
    splitPunct: ',.?',
  })
  .then(console.log)
  // [
  //   { text: '...', base64: '...' },
  //   { text: '...', base64: '...' },
  //   ...
  // ];
  .catch(console.error);
```

</p>
</details>
<br/>

## Options (All options are optional)

| Option       | Type      | Default                      | Description                                                                                                                   |
| ------------ | --------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `lang`       | `string`  | en-US                        | See all avaiable language code at https://cloud.google.com/speech/docs/languages                                              |
| `slow`       | `boolean` | false                        | Use the slow audio speed if set `slow` to `true`                                                                              |
| `host`       | `string`  | https://translate.google.com | You can change the `host` if the default host could not work in your region (e.g. https://translate.google.com.cn).           |
| `timeout`    | `number`  | 10000 (ms)                   | (Only for `getAudioBase64` and `getAllAudioBase64`) Set timeout for the HTTP request.                                         |
| `splitPunct` | `string`  |                              | (Only for `getAllAudioUrl` and `getAllAudioBase64`) Set the punctuation to split the long text to short text. (e.g. "，、。") |

[More Examples](https://github.com/zlargon/google-tts/tree/master/example)

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
