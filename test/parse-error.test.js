const axios = require('axios');
const googleTTS = require('../dist/index');

jest.mock('axios');

describe('parse base64 text', () => {
  it('HTTP request failed', async () => {
    axios.mockRejectedValue(new Error('Network Error'));

    await expect(() => {
      return googleTTS.getAudioBase64('test');
    }).rejects.toThrow('Network Error');
  });

  it('parse failed (Part 1)', async () => {
    axios.mockResolvedValue({ data: 'UNEXPECT RETURN VALUE' });

    await expect(() => {
      return googleTTS.getAudioBase64('test');
    }).rejects.toThrow('parse response failed');
  });

  it('parse failed (Part 2)', async () => {
    const data = `)]}'

[["wrb.fr","jQ1olc","UNEXPECT VALUE",null,null,null,"generic"]
,["di",27]
,["af.httprm",27,"3172555329265361983",8]
]`;
    axios.mockResolvedValue({ data });

    await expect(() => {
      return googleTTS.getAudioBase64('test');
    }).rejects.toThrow('parse response failed');
  });

  it('language does not exist', async () => {
    const data = `)]}'

[["wrb.fr","jQ1olc",null,null,null,null,"generic"]
,["di",27]
,["af.httprm",27,"3172555329265361983",8]
]`;
    axios.mockResolvedValue({ data });

    await expect(() => {
      return googleTTS.getAudioBase64('test', { lang: 'CAT-LANG' });
    }).rejects.toThrow('lang "CAT-LANG" might not exist');
  });
});
