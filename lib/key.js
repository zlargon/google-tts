var fetch = require('isomorphic-fetch');
var host = 'https://translate.google.com';

/**
 * Get Key from https://translate.google.com
 *
 * @param   {Number!} timeout  default is 10000ms
 * @return  Promise(key: String)
 */
module.exports = function (timeout) {
  return fetch(host, {
    timeout: timeout || 10 * 1000
  })
  .then(function (res) {
    if (res.status !== 200) {
      throw new Error('request to ' + host + ' failed, status code = ' + res.status + ' (' + res.statusText + ')');
    }
    return res.text();
  })
  .then(function (html) {
    var TKK = null;

    try {
      eval(html.match(/TKK=eval\(\'\(.*\)\'\);/g)[0]);  // TKK = '405291.1334555331'
      if (TKK === null) throw null;
    } catch (e) {
      throw new Error('get key failed from google');
    }

    return TKK;
  });
};
