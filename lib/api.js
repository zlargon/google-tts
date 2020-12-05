const url = require('url');
const host = 'https://translate.google.com';

/**
 * Generate "Google TTS" audio URL
 *
 * @param {string}  text   length should be less than 200 characters
 * @param {string?} lang   default is 'en'
 * @param {number?} speed  default is 1, slow = 0.24
 * @return {string} url
 */
module.exports = (text, lang = 'en', speed = 1) => {
  if (typeof text !== 'string' || text.length === 0) {
    throw new TypeError('text should be a string');
  }

  if (text.length > 200) {
    throw new RangeError(`text length (${text.length}) should be less than 200 characters`);
  }

  if (typeof lang !== 'string' || lang.length === 0) {
    throw new TypeError('lang should be a string');
  }

  if (typeof speed !== 'number') {
    throw new TypeError('speed should be a number');
  }

  return host + '/translate_tts' + url.format({
    query: {
      ie: 'UTF-8',
      q: text,
      tl: lang,
      total: 1,
      idx: 0,
      textlen: text.length,
      client: 'tw-ob',
      prev: 'input',
      ttsspeed: speed
    }
  });
};
