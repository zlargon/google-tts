const fetch = require('isomorphic-fetch');
const tts = require('..');
jest.setTimeout(60000);
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

describe('English TTS', () => {
  it('Hello', async () => {
    const url = await tts('Hello');
    await sleep(1000);
    const res = await fetch(url);
    expect(res.status).toBe(200);
    await expect(fetch(url)).rejects.toThrow(/ECONN/);
  });

  it('hello', async () => {
    const url = await tts('hello world', 'en');
    await sleep(1000);
    const res = await fetch(url);
    expect(res.status).toBe(200);
    await expect(fetch(url)).rejects.toThrow(/ECONN/);
  });

  it('hello world', async () => {
    const url = await tts('hello world', 'en', 1);
    await sleep(1000);
    const res = await fetch(url);
    expect(res.status).toBe(200);
    await expect(fetch(url)).rejects.toThrow(/ECONN/);
  });

  it('123', async () => {
    const url = await tts('123', 'en', 0.24);
    await sleep(1000);
    const res = await fetch(url);
    expect(res.status).toBe(200);
    await expect(fetch(url)).rejects.toThrow(/ECONN/);
  });
});
