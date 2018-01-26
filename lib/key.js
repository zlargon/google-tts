var fetch = require('isomorphic-fetch');
var host = 'https://translate.google.com';

/**
 * Get Key from https://translate.google.com
 *
 * @param   {Number!} timeout  default is 10000ms
 * @return  Promise(key: String)
 */
module.exports = function (timeout) {
  var myHeaders = new Headers({ 'Access-Control-Allow-Origin': '*' });
  
  return fetch(host, {
    timeout: timeout || 10 * 1000,
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
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
      
      if (TKK === null) {
        
        TKK = eval(html.match(/tkk:(\'\(\(.*\)\)')/g)[0]) // Updated for newer Google translate script
        
        if (TKK === null) {
          throw null;
        }
            
      }
    } catch (e) {
      throw new Error('get key failed from google');
    }

    return TKK;
  });
};
