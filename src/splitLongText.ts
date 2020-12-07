const isSpace = (s: string, i: number) => /\s/.test(s.charAt(i));
const lastIndexOfSpace = (s: string, left: number, right: number): number => {
  for (let i = right; i >= left; i--) {
    if (isSpace(s, i)) return i;
  }
  return -1; // not found
};

/**
 * split the long text to small texts
 * Time Complexity: O(n)
 *
 * @param {string} text
 * @param {string} MAX_LEN
 * @returns {string[]} string list
 */
const splitLongText = (text: string, MAX_LEN = 200): string[] => {
  const result: string[] = [];
  const addResult = (text: string, start: number, end: number) => {
    result.push(text.slice(start, end + 1));
  };

  let start = 0;
  for (;;) {
    // check text's length
    if (text.length - start <= MAX_LEN) {
      addResult(text, start, text.length - 1);
      break; // end of text
    }

    // check whether the word is cut in the middle.
    let end = start + MAX_LEN - 1;
    if (isSpace(text, end) || isSpace(text, end + 1)) {
      addResult(text, start, end);
      start = end + 1;
      continue;
    }

    // find last index of space
    end = lastIndexOfSpace(text, start, end);
    if (end === -1) {
      const str = text.slice(start, start + MAX_LEN);
      throw new Error(`The word is too long to split into a small text:\n ${str} ...`);
    }

    // add result
    addResult(text, start, end);
    start = end + 1;
  }

  return result;
};

export default splitLongText;
