const fetch = require('node-fetch');
const tts = require('..');
jest.setTimeout(60000);

describe('English TTS', () => {
  it('Hello', async () => {
    const url = await tts('Hello');
    const res = await fetch(url);
    expect(res.status).toBe(200);
  });

  it('hello', async () => {
    const url = await tts('hello world', 'en');
    const res = await fetch(url);
    expect(res.status).toBe(200);
  });

  it('hello world', async () => {
    const url = await tts('hello world', 'en', 1);
    const res = await fetch(url);
    expect(res.status).toBe(200);
  });

  it('123', async () => {
    const url = await tts('123', 'en', 0.24);
    const res = await fetch(url);
    expect(res.status).toBe(200);
  });
});
