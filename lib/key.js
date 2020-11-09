const fetch = require('isomorphic-fetch');
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const host = 'https://translate.google.com';
const retry = {
  maxTimes: 10,
  interval: 50,
};

/**
 * Get Token Key from https://translate.google.com
 *
 * @param {number?} timeout   - default is 10000ms
 * @returns {Promise<string>} - url
 */
module.exports = async (timeout = 10000) => {
  for (let i = 0; i < retry.maxTimes; i++) {
    const res = await fetch(host, { timeout });
    if (res.status !== 200) {
      throw new Error(`request to ${host} failed, status code = ${res.status} (${res.statusText})`);
    }

    const html = await res.text();
    const token = html.match(/tkk:'(\d+.\d+)'/);
    if (!token) {
      await delay(retry.interval); // retry after 50 ms
      continue;
    }
    return token[1];
  }

  throw new Error('get token key failed from google');
};
