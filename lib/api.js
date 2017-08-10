var url = require('url');
var token = require('./token');
var host = 'https://translate.google.com';

/**
 * Generate "Google TTS" audio download link
 *
 * @param   {String}  text   length should be less than 200 characters
 * @param   {String}  key
 * @param   {String!} lang   default is 'en'
 * @param   {Number!} speed  show = 0.24, default is 1
 * @return  {String}  url
 */
module.exports = function (text, key, lang, speed) {
  if (typeof text !== 'string' || text.length === 0) {
    throw new TypeError('text should be a string');
  }

  if (text.length > 200) {
    throw new RangeError('text length (' + text.length + ') should be less than 200 characters');
  }

  if (typeof key !== 'string' || key.length === 0) {
    throw new TypeError('key should be a string');
  }

  if (typeof lang !== 'undefined' && (typeof lang !== 'string' || lang.length === 0)) {
    throw new TypeError('lang should be a string');
  }

  if (typeof speed !== 'undefined' && typeof speed !== 'number') {
    throw new TypeError('speed should be a number');
  }

  return host + '/translate_tts' + url.format({
    query: {
      ie: 'UTF-8',
      q: text,
      tl: lang || 'en',
      total: 1,
      idx: 0,
      textlen: text.length,
      tk: token(text, key),
      client: 't',
      prev: 'input',
      ttsspeed: speed || 1
    }
  });
};
