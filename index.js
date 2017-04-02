var key = require('./lib/key');
var tts = require('./lib/api');

/**
 * Generate "Google TTS" audio download link
 *
 * @param   {String}  text
 * @param   {String!} lang     default is 'en'
 * @param   {Number!} speed    default is 1, show = 0.24
 * @param   {Number!} timeout  default is 10000ms
 * @param   {String}  accent   default is 'us', otherwise 'uk' 
 * @return  Promise(url: String)
 */
module.exports = function (text, lang, speed, timeout, accent) {
  return key(timeout).then(function (key) {
    return tts(text, key, lang, speed, accent);
  });
};
