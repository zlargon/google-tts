import type { LanguageCode } from './languages';

const assertInputTypes = (text: string, lang: LanguageCode, slow: boolean, host: string) => {
  if (typeof text !== 'string' || text.length === 0) {
    throw new TypeError('text should be a string');
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
};

export default assertInputTypes;
