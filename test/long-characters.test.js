const fetch = require('node-fetch');
const tts = require('..');
jest.setTimeout(60000);

describe('Long Characters', () => {
  it('English: 180 characters', async () => {
    const text =
      'The Industrial Revolution had several roots, one of which was a commercial revolution that, beginnin' +
      'g as far back as the sixteenth century, accompanied Europe’s expansion overseas.';

    const url = await tts(text, 'en');
    const res = await fetch(url);
    expect(res.status).toBe(200);
  });

  it('English: 200 characters', async () => {
    const text =
      'The Industrial Revolution had several roots, one of which was a commercial revolution that, beginnin' +
      'g as far back as the sixteenth century, accompanied Europe’s expansion overseas. exports and imports';

    const url = await tts(text, 'en');
    const res = await fetch(url);
    expect(res.status).toBe(200);
  });

  it('English: 268 characters throw RangeError', async () => {
    const text =
      'The Industrial Revolution had several roots, one of which was a commercial revolution that, beginnin' +
      'g as far back as the sixteenth century, accompanied Europe’s expansion overseas. Both exports and im' +
      'ports showed spectacular growth, particularly in England and France.';

    await expect(tts(text, 'en')).rejects.toThrow('should be less than 200 characters');
  });

  it('Chinese: 193 characters', async () => {
    const text =
      '如果想想生物在死之后被完全摧毁的种种方式，能够这样频繁出现化石是一件很令人惊讶的事。食腐动物和细菌的' +
      '破坏、化学性腐烂、腐蚀以及其它地质因素都会非常不利于保存。不过，如果生物体碰巧具有矿化的骨骼并且死于' +
      '可以迅速被沉积物掩埋的地方，摆脱被完全摧毁的几率便会大大增加。海底通常就具有上述的两方面条件，这里生' +
      '活着很多带壳的无脊椎动物（没有脊椎的动物），不断累积的似雨的沉积颗粒会把它们掩埋起来。';

    const url = await tts(text, 'zh');
    const res = await fetch(url);
    expect(res.status).toBe(200);
  });

  it('Chinese: 200 characters', async () => {
    const text =
      '如果想想生物在死之后被完全摧毁的种种方式，能够这样频繁出现化石是一件很令人惊讶的事。食腐动物和细菌的' +
      '破坏、化学性腐烂、腐蚀以及其它地质因素都会非常不利于保存。不过，如果生物体碰巧具有矿化的骨骼并且死于' +
      '可以迅速被沉积物掩埋的地方，摆脱被完全摧毁的几率便会大大增加。海底通常就具有上述的两方面条件，这里生' +
      '活着很多带壳的无脊椎动物（没有脊椎的动物），不断累积的似雨的沉积颗粒会把它们掩埋起来。虽然多数的化石';

    const url = await tts(text, 'zh');
    const res = await fetch(url);
    expect(res.status).toBe(200);
  });

  it('Chinese: 211 characters throw RangeError', async () => {
    const text =
      '如果想想生物在死之后被完全摧毁的种种方式，能够这样频繁出现化石是一件很令人惊讶的事。食腐动物和细菌的' +
      '破坏、化学性腐烂、腐蚀以及其它地质因素都会非常不利于保存。不过，如果生物体碰巧具有矿化的骨骼并且死于' +
      '可以迅速被沉积物掩埋的地方，摆脱被完全摧毁的几率便会大大增加。海底通常就具有上述的两方面条件，这里生' +
      '活着很多带壳的无脊椎动物（没有脊椎的动物），不断累积的似雨的沉积颗粒会把它们掩埋起来。虽然多数的化石' +
      '是在海洋沉积岩中发现的';

    await expect(tts(text, 'zh')).rejects.toThrow('should be less than 200 characters');
  });
});
