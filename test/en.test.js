const axios = require('axios');
const googleTTS = require('../dist/index');
jest.setTimeout(60000);

describe('English TTS', () => {
  it('Hello', async () => {
    const url = googleTTS.getAudioUrl('Hello');
    await axios.get(url);
  });

  it('hello', async () => {
    const url = googleTTS.getAudioUrl('hello world', { lang: 'en-US' });
    await axios.get(url);
  });

  it('hello world', async () => {
    const url = googleTTS.getAudioUrl('hello world', { lang: 'en-US', slow: false });
    await axios.get(url);
  });

  it('123', async () => {
    const url = googleTTS.getAudioUrl('123', { lang: 'en-US', slow: true });
    await axios.get(url);
  });
});
