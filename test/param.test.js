const googleTTS = require('../dist/index');

describe('parameters', () => {
  it('text = null', async () => {
    expect(() => {
      googleTTS.getAudioUrl(null);
    }).toThrow('text should be a string');
  });

  it("text = ''", async () => {
    expect(() => {
      googleTTS.getAudioUrl('');
    }).toThrow('text should be a string');
  });

  it('text = 123', async () => {
    expect(() => {
      googleTTS.getAudioUrl(123);
    }).toThrow('text should be a string');
  });

  it('lang = null', async () => {
    expect(() => {
      googleTTS.getAudioUrl('test', { lang: null });
    }).toThrow('lang should be a string');
  });

  it("lang = ''", async () => {
    expect(() => {
      googleTTS.getAudioUrl('test', { lang: '' });
    }).toThrow('lang should be a string');
  });

  it('lang = 123 (number)', async () => {
    expect(() => {
      googleTTS.getAudioUrl('test', { lang: 123 });
    }).toThrow('lang should be a string');
  });

  it('slow = null', async () => {
    expect(() => {
      googleTTS.getAudioUrl('test', { lang: 'en', slow: null });
    }).toThrow('slow should be a boolean');
  });

  it("slow = '123'", async () => {
    expect(() => {
      googleTTS.getAudioUrl('test', { lang: 'en', slow: '123' });
    }).toThrow('slow should be a boolean');
  });
});
