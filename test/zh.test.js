const axios = require('axios');
const tts = require('../dist/index');
jest.setTimeout(60000);

describe('Chinese TTS', () => {
  it('你好', async () => {
    const url = await tts('你好', 'zh');
    await axios.get(url);
  });

  it('你好世界', async () => {
    const url = await tts('你好世界', 'zh');
    await axios.get(url);
  });

  it('123', async () => {
    const url = await tts('123', 'zh', 0.24);
    await axios.get(url);
  });
});
