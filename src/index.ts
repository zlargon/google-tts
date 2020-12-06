const tts = require('./api');

/**
 * Generate "Google TTS" audio URL
 *
 * @param {string}  text
 * @param {string?} lang     default is 'en'
 * @param {number?} speed    default is 1, slow = 0.24
 * @param {number?} timeout  this parameter is deprecated
 * @return {Promise<string>} url
 */
module.exports = async (text: string, lang: string, speed: number, timeout: number) => {
  if (typeof timeout !== 'undefined') {
    console.warn('timeout parameter is deprecated');
  }

  return tts(text, lang, speed);
};
