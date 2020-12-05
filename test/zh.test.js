const fetch = require('node-fetch');
const tts = require('..');
jest.setTimeout(60000);

describe('Chinese TTS', () => {
  it('你好', async () => {
    const url = await tts('你好', 'zh');
    const res = await fetch(url);
    expect(res.status).toBe(200);
  });

  it('你好世界', async () => {
    const url = await tts('你好世界', 'zh');
    const res = await fetch(url);
    expect(res.status).toBe(200);
  });

  it('123', async () => {
    const url = await tts('123', 'zh', 0.24);
    const res = await fetch(url);
    expect(res.status).toBe(200);
  });
});
