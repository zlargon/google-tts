const axios = require('axios');
const isBase64 = require('is-base64');
const googleTTS = require('../dist/index');
jest.setTimeout(60000);

const TestCases = [
  ['Hello'],
  ['hello world', { lang: 'en-US' }],
  ['hello world', { slow: false }],
  ['hello world', { host: 'https://translate.google.com.cn/' }],
  ['你好', { lang: 'zh' }],
  ['你好世界', { lang: 'zh' }],
  ['123', { lang: 'en-US', slow: true }],
  ['123', { lang: 'zh', slow: true }],
];

test('get TTS URL', async () => {
  for (const [text, options] of TestCases) {
    const url = googleTTS.getAudioUrl(text, options);
    await axios.get(url);
  }
});

test('get TTS Base64 Text', async () => {
  for (const [text, options] of TestCases) {
    const base64 = await googleTTS.getAudioBase64(text, options);
    expect(isBase64(base64)).toBe(true);
  }
});
