var url = require('url');
var token = require('./token');
var ushost = 'https://translate.google.com';
var ukhost = 'https://translate.google.co.uk';

/**
 * Generate "Google TTS" audio download link
 *
 * @param   {String}  text
 * @param   {String}  key
 * @param   {String!} lang   default is 'en'
 * @param   {Number!} speed  show = 0.24, default is 1
 * @param   {String}  accent   default is 'us', otherwise 'uk'
 * @return  {String}  url
 */
module.exports = function (text, key, lang, speed, accent) {
  if (typeof text !== 'string' || text.length === 0) {
    throw new TypeError('text should be a string');
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

  if (typeof accent !== 'undefined' && accent !== 'us' && accent !== 'uk') {
    throw new TypeError('accent must be "us" or "uk"');
  }

  var host = accent === 'uk' ? ukhost : ushost;

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
