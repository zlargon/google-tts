import url from 'url';
import type { Language } from './types';

interface Option {
  host?: string;
  lang?: Language;
  slow?: boolean;
}

/**
 * Generate "Google TTS" audio URL
 *
 * @param {string}   text         length should be less than 200 characters
 * @param {object?}  option
 * @param {string?}  option.lang  default is "en-US"
 * @param {boolean?} option.slow  default is false
 * @param {string?}  option.host  default is "https://translate.google.com"
 * @return {string} url
 */
const getTtsAudioUrl = (
  text: string,
  { host = 'https://translate.google.com', lang = 'en-US', slow = false }: Option = {}
): string => {
  if (typeof text !== 'string' || text.length === 0) {
    throw new TypeError('text should be a string');
  }

  if (text.length > 200) {
    throw new RangeError(`text length (${text.length}) should be less than 200 characters`);
  }

  if (typeof lang !== 'string' || lang.length === 0) {
    throw new TypeError('lang should be a string');
  }

  if (typeof slow !== 'boolean') {
    throw new TypeError('slow should be a boolean');
  }

  if (typeof host !== 'string' || host.length === 0) {
    throw new TypeError('host should be a string');
  }

  return (
    host +
    '/translate_tts' +
    url.format({
      query: {
        ie: 'UTF-8',
        q: text,
        tl: lang,
        total: 1,
        idx: 0,
        textlen: text.length,
        client: 'tw-ob',
        prev: 'input',
        ttsspeed: slow ? 0.24 : 1,
      },
    })
  );
};

export default getTtsAudioUrl;
