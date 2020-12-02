const tts = require('..');
jest.setTimeout(60000);

describe('parameters', () => {
  it('text = null',  () => {
     expect(()=>{tts(null);}).toThrow('text should be a string');
  });

  it("text = ''",  () => {
     expect(()=>{tts('');}).toThrow('text should be a string');
  });

  it('text = 123',  () => {
     expect(()=>{tts(123);}).toThrow('text should be a string');
  });

  it('lang = null',  () => {
     expect(()=>{tts('test', null);}).toThrow('lang should be a string');
  });

  it("lang = ''",  () => {
     expect(()=>{tts('test', '');}).toThrow('lang should be a string');
  });

  it('lang = 123 (number)',  () => {
     expect(()=>{tts('test', 123);}).toThrow('lang should be a string');
  });

  it('speed = null',  () => {
     expect(()=>{tts('test', 'en', null);}).toThrow('speed should be a number');
  });

  it("speed = '123'",  () => {
     expect(()=>{tts('test', 'en', '123');}).toThrow('speed should be a number');
  });
});
