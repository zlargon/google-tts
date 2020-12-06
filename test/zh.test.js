const axios = require('axios');
const googleTTS = require('../dist/index');
jest.setTimeout(60000);

describe('Chinese TTS', () => {
  it('你好', async () => {
    const url = googleTTS.getAudioUrl('你好', { lang: 'zh' });
    await axios.get(url);
  });

  it('你好世界', async () => {
    const url = googleTTS.getAudioUrl('你好世界', { lang: 'zh' });
    await axios.get(url);
  });

  it('123', async () => {
    const url = googleTTS.getAudioUrl('123', { lang: 'zh', slow: true });
    await axios.get(url);
  });
});
