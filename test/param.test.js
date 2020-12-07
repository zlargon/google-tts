const googleTTS = require('../dist/index');

const TestCases = [
  [null, {}, 'text should be a string'],
  ['', {}, 'text should be a string'],
  [123, {}, 'text should be a string'],
  ['test', { lang: null }, 'lang should be a string'],
  ['test', { lang: '' }, 'lang should be a string'],
  ['test', { lang: 123 }, 'lang should be a string'],
  ['test', { slow: null }, 'slow should be a boolean'],
  ['test', { slow: 123 }, 'slow should be a boolean'],
  ['test', { host: null }, 'host should be a string'],
  ['test', { host: '' }, 'host should be a string'],
];

test('test paramater for TTS URL', async () => {
  for (const [text, option, errorMessage] of TestCases) {
    // 1. audio url
    expect(() => {
      googleTTS.getAudioUrl(text, option);
    }).toThrow(errorMessage);

    // 2. all audio url
    expect(() => {
      googleTTS.getAllAudioUrls(text, option);
    }).toThrow(errorMessage);
  }
});

test('test paramater for TTS base64', async () => {
  const Base64TestCases = [
    ...TestCases,
    ['test', { timeout: null }, 'timeout should be a positive number'],
    ['test', { timeout: -10 }, 'timeout should be a positive number'],
    ['test', { timeout: 10 }, 'timeout of 10ms exceeded'],
    ['test', { lang: 'DOG-LANG' }, 'lang "DOG-LANG" might not exist'],
  ];

  for (const [text, option, errorMessage] of Base64TestCases) {
    // 1. audio base64
    await expect(() => {
      return googleTTS.getAudioBase64(text, option);
    }).rejects.toThrow(errorMessage);

    // 2. all audio base64
    await expect(() => {
      return googleTTS.getAllAudioBase64(text, option);
    }).rejects.toThrow(errorMessage);
  }
});

test('test splitPunct option for all URL and all base64', async () => {
  const option = { splitPunct: null };
  const errorMessage = 'splitPunct should be a string';

  // 1. all audio url
  expect(() => {
    googleTTS.getAllAudioUrls('test', option);
  }).toThrow(errorMessage);

  // 2. all audio base64
  await expect(() => {
    return googleTTS.getAllAudioBase64('test', option);
  }).rejects.toThrow(errorMessage);
});
