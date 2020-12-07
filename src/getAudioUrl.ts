import url from 'url';
import assertInputTypes from './assertInputTypes';
import type { Language } from './types';

interface Option {
  lang?: Language;
  slow?: boolean;
  host?: string;
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
  { lang = 'en-US', slow = false, host = 'https://translate.google.com' }: Option = {}
): string => {
  assertInputTypes(text, lang, slow, host);

  if (text.length > 200) {
    throw new RangeError(`text length (${text.length}) should be less than 200 characters`);
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
