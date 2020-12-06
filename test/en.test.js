const axios = require('axios');
const tts = require('../dist/index');
jest.setTimeout(60000);

describe('English TTS', () => {
  it('Hello', async () => {
    const url = await tts('Hello');
    await axios.get(url);
  });

  it('hello', async () => {
    const url = await tts('hello world', 'en');
    await axios.get(url);
  });

  it('hello world', async () => {
    const url = await tts('hello world', 'en', 1);
    await axios.get(url);
  });

  it('123', async () => {
    const url = await tts('123', 'en', 0.24);
    await axios.get(url);
  });
});
