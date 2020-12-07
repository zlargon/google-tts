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
  for (const [text, options, errorMessage] of TestCases) {
    // 1. audio url
    expect(() => {
      googleTTS.getAudioUrl(text, options);
    }).toThrow(errorMessage);

    // 2. all audio url
    expect(() => {
      googleTTS.getAllAudioUrls(text, options);
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

  for (const [text, options, errorMessage] of Base64TestCases) {
    // 1. audio base64
    await expect(() => {
      return googleTTS.getAudioBase64(text, options);
    }).rejects.toThrow(errorMessage);

    // 2. all audio base64
    await expect(() => {
      return googleTTS.getAllAudioBase64(text, options);
    }).rejects.toThrow(errorMessage);
  }
});
