var tts = require('./lib/api');

/**
 * Generate "Google TTS" audio download link
 *
 * @param   {String}  text
 * @param   {String!} lang     default is 'en'
 * @param   {Number!} speed    default is 1, show = 0.24
 * @return  Promise(url: String)
 */
module.exports = function (text, lang, speed) {
    return tts(text, lang, speed);
};
