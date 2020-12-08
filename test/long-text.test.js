const axios = require('axios');
const isBase64 = require('is-base64');
const googleTTS = require('../dist/index');
jest.setTimeout(60000);

describe('Long Text', () => {
  it('English: 180 characters', async () => {
    const text =
      'The Industrial Revolution had several roots, one of which was a commercial revolution that, beginnin' +
      'g as far back as the sixteenth century, accompanied Europe’s expansion overseas.';

    // 1. audio URL
    const url = googleTTS.getAudioUrl(text);
    await axios.get(url);

    // 2. all audio URLs
    let resultList = googleTTS.getAllAudioUrls(text);
    expect(resultList.length).toBe(1);
    expect(resultList).toStrictEqual([{ shortText: text, url }]);

    // 3. audio base64
    const base64 = await googleTTS.getAudioBase64(text);
    expect(isBase64(base64)).toBe(true);

    // 4. all audio base64
    resultList = await googleTTS.getAllAudioBase64(text);
    expect(resultList.length).toBe(1);
    expect(resultList).toStrictEqual([{ shortText: text, base64 }]);
  });

  it('English: 200 characters', async () => {
    const text =
      'The Industrial Revolution had several roots, one of which was a commercial revolution that, beginnin' +
      'g as far back as the sixteenth century, accompanied Europe’s expansion overseas. exports and imports';

    // 1. audio URL
    const url = googleTTS.getAudioUrl(text);
    await axios.get(url);

    // 2. all audio URLs
    let resultList = googleTTS.getAllAudioUrls(text);
    expect(resultList.length).toBe(1);
    expect(resultList).toStrictEqual([{ shortText: text, url }]);

    // 3. audio base64
    const base64 = await googleTTS.getAudioBase64(text);
    expect(isBase64(base64)).toBe(true);

    // 4. all audio base64
    resultList = await googleTTS.getAllAudioBase64(text);
    expect(resultList.length).toBe(1);
    expect(resultList).toStrictEqual([{ shortText: text, base64 }]);
  });

  it('English: 268 characters', async () => {
    const errorMessage = 'should be less than 200 characters';
    const text =
      'The Industrial Revolution had several roots, one of which was a commercial revolution that, beginnin' +
      'g as far back as the sixteenth century, accompanied Europe’s expansion overseas. Both exports and im' +
      'ports showed spectacular growth, particularly in England and France.';

    // 1. audio URL
    expect(() => {
      googleTTS.getAudioUrl(text);
    }).toThrow(errorMessage);

    // 2. all audio URLs
    let resultList = googleTTS.getAllAudioUrls(text);
    expect(resultList.length).toBe(2);
    expect(resultList.map((item) => item.shortText).join('')).toBe(text);
    await Promise.all(resultList.map(({ url }) => axios.get(url)));

    // 3. audio base64
    await expect(() => {
      return googleTTS.getAudioBase64(text);
    }).rejects.toThrow(errorMessage);

    // 4. all audio base64
    resultList = await googleTTS.getAllAudioBase64(text);
    expect(resultList.length).toBe(2);
    expect(resultList.map((item) => item.shortText).join('')).toBe(text);
    for (const { base64 } of resultList) {
      expect(isBase64(base64)).toBe(true);
    }
  });

  it('Chinese: 193 characters', async () => {
    const option = { lang: 'zh' };
    const text =
      '如果想想生物在死之后被完全摧毁的种种方式，能够这样频繁出现化石是一件很令人惊讶的事。食腐动物和细菌的' +
      '破坏、化学性腐烂、腐蚀以及其它地质因素都会非常不利于保存。不过，如果生物体碰巧具有矿化的骨骼并且死于' +
      '可以迅速被沉积物掩埋的地方，摆脱被完全摧毁的几率便会大大增加。海底通常就具有上述的两方面条件，这里生' +
      '活着很多带壳的无脊椎动物（没有脊椎的动物），不断累积的似雨的沉积颗粒会把它们掩埋起来。';

    // 1. audio URL
    const url = googleTTS.getAudioUrl(text, option);
    await axios.get(url);

    // 2. all audio URLs
    let resultList = googleTTS.getAllAudioUrls(text, option);
    expect(resultList.length).toBe(1);
    expect(resultList).toStrictEqual([{ shortText: text, url }]);

    // 3. audio base64
    const base64 = await googleTTS.getAudioBase64(text, option);
    expect(isBase64(base64)).toBe(true);

    // 4. all audio base64
    resultList = await googleTTS.getAllAudioBase64(text, option);
    expect(resultList.length).toBe(1);
    expect(resultList).toStrictEqual([{ shortText: text, base64 }]);
  });

  it('Chinese: 200 characters', async () => {
    const option = { lang: 'zh' };
    const text =
      '如果想想生物在死之后被完全摧毁的种种方式，能够这样频繁出现化石是一件很令人惊讶的事。食腐动物和细菌的' +
      '破坏、化学性腐烂、腐蚀以及其它地质因素都会非常不利于保存。不过，如果生物体碰巧具有矿化的骨骼并且死于' +
      '可以迅速被沉积物掩埋的地方，摆脱被完全摧毁的几率便会大大增加。海底通常就具有上述的两方面条件，这里生' +
      '活着很多带壳的无脊椎动物（没有脊椎的动物），不断累积的似雨的沉积颗粒会把它们掩埋起来。虽然多数的化石';

    // 1. audio URL
    const url = googleTTS.getAudioUrl(text, option);
    await axios.get(url);

    // 2. all audio URLs
    let resultList = googleTTS.getAllAudioUrls(text, option);
    expect(resultList.length).toBe(1);
    expect(resultList).toStrictEqual([{ shortText: text, url }]);

    // 3. audio base64
    const base64 = await googleTTS.getAudioBase64(text, option);
    expect(isBase64(base64)).toBe(true);

    // 4. all audio base64
    resultList = await googleTTS.getAllAudioBase64(text, option);
    expect(resultList.length).toBe(1);
    expect(resultList).toStrictEqual([{ shortText: text, base64 }]);
  });

  it('Chinese: 211 characters', async () => {
    const errorMessage = 'should be less than 200 characters';
    const option = { lang: 'zh', splitPunct: '，、。（）' };
    const text =
      '如果想想生物在死之后被完全摧毁的种种方式，能够这样频繁出现化石是一件很令人惊讶的事。食腐动物和细菌的' +
      '破坏、化学性腐烂、腐蚀以及其它地质因素都会非常不利于保存。不过，如果生物体碰巧具有矿化的骨骼并且死于' +
      '可以迅速被沉积物掩埋的地方，摆脱被完全摧毁的几率便会大大增加。海底通常就具有上述的两方面条件，这里生' +
      '活着很多带壳的无脊椎动物（没有脊椎的动物），不断累积的似雨的沉积颗粒会把它们掩埋起来。虽然多数的化石' +
      '是在海洋沉积岩中发现的';

    // 1. audio URL
    expect(() => {
      googleTTS.getAudioUrl(text, option);
    }).toThrow(errorMessage);

    // 2. all audio URLs
    let resultList = googleTTS.getAllAudioUrls(text, option);
    expect(resultList.length).toBe(2);
    expect(resultList.map((item) => item.shortText).join('')).toBe(text);
    await Promise.all(resultList.map(({ url }) => axios.get(url)));

    // 3. audio base64
    await expect(() => {
      return googleTTS.getAudioBase64(text, option);
    }).rejects.toThrow(errorMessage);

    // 4. all audio base64
    resultList = await googleTTS.getAllAudioBase64(text, option);
    expect(resultList.length).toBe(2);
    expect(resultList.map((item) => item.shortText).join('')).toBe(text);
    for (const { base64 } of resultList) {
      expect(isBase64(base64)).toBe(true);
    }
  });
});
