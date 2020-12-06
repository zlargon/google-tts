import axios from 'axios';
import type { Language } from './types';

interface Option {
  host?: string;
  lang?: Language;
  slow?: boolean;
  timeout?: number;
}

/**
 * Get "Google TTS" audio base64 text
 *
 * @param {string}   text           length should be less than 200 characters
 * @param {object?}  option
 * @param {string?}  option.lang    default is "en-US"
 * @param {boolean?} option.slow    default is false
 * @param {string?}  option.host    default is "https://translate.google.com"
 * @param {number?}  option.timeout default is 10000 (ms)
 * @returns {Promise<string>} url
 */
const getTtsBase64 = async (
  text: string,
  {
    host = 'https://translate.google.com',
    lang = 'en-US',
    slow = false,
    timeout = 10000,
  }: Option = {}
): Promise<string> => {
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

  if (typeof timeout !== 'number' || timeout <= 0) {
    throw new TypeError('timeout should be a positive number');
  }

  const res = await axios({
    method: 'post',
    baseURL: host,
    url: '/_/TranslateWebserverUi/data/batchexecute',
    timeout,
    data:
      'f.req=' +
      encodeURIComponent(
        JSON.stringify([
          [['jQ1olc', JSON.stringify([text, lang, slow ? true : null, 'null']), null, 'generic']],
        ])
      ),
  });

  // 1. parse audio base64 string
  let result;
  try {
    result = eval(res.data.slice(5))[0][2];
  } catch (e) {
    throw new Error(`parse response failed:\n${res.data}`);
  }

  // Check the result. The result will be null if given the lang doesn't exist
  if (!result) {
    throw new Error(`lang "${lang}" might not exist`);
  }

  // 2. continue to parse audio base64 string
  try {
    result = eval(result)[0];
  } catch (e) {
    throw new Error(`parse response failed:\n${res.data}`);
  }

  return result;
};

export default getTtsBase64;
