// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
const SPACE_REGEX = '\\s\\uFEFF\\xA0';

// https://remarkablemark.org/blog/2019/09/28/javascript-remove-punctuation/
const DEFAULT_PUNCTUATION_REGEX = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

interface Option {
  maxLength?: number;
  splitPunct?: string;
}

/**
 * split the long text to short texts
 * Time Complexity: O(n)
 *
 * @param {string}  text
 * @param {object?} option
 * @param {number?} option.maxLength  default is 200
 * @param {string?} option.splitPunct default is ''
 * @returns {string[]} string list
 */
const splitLongText = (
  text: string,
  { maxLength = 200, splitPunct = '' }: Option = {}
): string[] => {
  const isSpaceOrPunct = (s: string, i: number) => {
    const regex = new RegExp('[' + SPACE_REGEX + DEFAULT_PUNCTUATION_REGEX + splitPunct + ']');
    return regex.test(s.charAt(i));
  };

  const lastIndexOfSpaceOrPunct = (s: string, left: number, right: number): number => {
    for (let i = right; i >= left; i--) {
      if (isSpaceOrPunct(s, i)) return i;
    }
    return -1; // not found
  };

  const result: string[] = [];
  const addResult = (text: string, start: number, end: number) => {
    result.push(text.slice(start, end + 1));
  };

  let start = 0;
  for (;;) {
    // check text's length
    if (text.length - start <= maxLength) {
      addResult(text, start, text.length - 1);
      break; // end of text
    }

    // check whether the word is cut in the middle.
    let end = start + maxLength - 1;
    if (isSpaceOrPunct(text, end) || isSpaceOrPunct(text, end + 1)) {
      addResult(text, start, end);
      start = end + 1;
      continue;
    }

    // find last index of space
    end = lastIndexOfSpaceOrPunct(text, start, end);
    if (end === -1) {
      const str = text.slice(start, start + maxLength);
      throw new Error(`The word is too long to split into a short text:\n ${str} ...`);
    }

    // add result
    addResult(text, start, end);
    start = end + 1;
  }

  return result;
};

export default splitLongText;
