const fetch = require('isomorphic-fetch');
const tts = require('..');
jest.setTimeout(60000);
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

describe('Chinese TTS', () => {
  it('你好', async () => {
    const url = await tts('你好', 'zh');
    await sleep(1000);
    const res = await fetch(url);
    expect(res.status).toBe(200);
    await expect(fetch(url)).rejects.toThrow(/ECONN/);
  });

  it('你好世界', async () => {
    const url = await tts('你好世界', 'zh');
    await sleep(1000);
    const res = await fetch(url);
    expect(res.status).toBe(200);
    await expect(fetch(url)).rejects.toThrow(/ECONN/);
  });

  it('123', async () => {
    const url = await tts('123', 'zh', 0.24);
    await sleep(1000);
    const res = await fetch(url);
    expect(res.status).toBe(200);
    await expect(fetch(url)).rejects.toThrow(/ECONN/);
  });
});
