const tts = require('..');
jest.setTimeout(60000);

describe('parameters', () => {
  it('text = null', async () => {
    await expect(tts(null)).rejects.toThrow('text should be a string');
  });

  it("text = ''", async () => {
    await expect(tts('')).rejects.toThrow('text should be a string');
  });

  it('text = 123', async () => {
    await expect(tts(123)).rejects.toThrow('text should be a string');
  });

  it('lang = null', async () => {
    await expect(tts('test', null)).rejects.toThrow('lang should be a string');
  });

  it("lang = ''", async () => {
    await expect(tts('test', '')).rejects.toThrow('lang should be a string');
  });

  it('lang = 123 (number)', async () => {
    await expect(tts('test', 123)).rejects.toThrow('lang should be a string');
  });

  it('speed = null', async () => {
    await expect(tts('test', 'en', null)).rejects.toThrow('speed should be a number');
  });

  it("speed = '123'", async () => {
    await expect(tts('test', 'en', '123')).rejects.toThrow('speed should be a number');
  });

  it('timeout = 10 ms (show deprecated message)', async () => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());
    await tts('test', 'en', 1, 10);
    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenCalledWith('timeout parameter is deprecated');
    console.warn.mockRestore();
  });
});
