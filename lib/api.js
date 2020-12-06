/**
 * Generate "Google TTS" audio URL
 *
 * @param {string}  text   length should be less than 200 characters
 * @param {string?} lang   default is 'en'
 * @param {number?} speed  default is 1, slow = 0.24
 * @return {string} url
 */
module.exports = async (text, lang = 'en', speed = 1) => {
  if (typeof text !== 'string' || text.length === 0) {
    throw new TypeError('text should be a string');
  }

  if (text.length > 200) {
    throw new RangeError(`text length (${text.length}) should be less than 200 characters`);
  }

  if (typeof lang !== 'string' || lang.length === 0) {
    throw new TypeError('lang should be a string');
  }

  if (typeof speed !== 'number') {
    throw new TypeError('speed should be a number');
  }
  const ip    = require('my-ip')();
  const port  = await require('get-port')();
  const path  = require.resolve('./onetime-synthesizer.js');
  const child = require('child_process').spawn("node",[path,ip,port,text,lang,speed],{
    detached: true,
    stdio: ['ignore', 'ignore', 'ignore']
  });
  child.unref();
  const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
  while(!(await require('is-port-reachable')(port,{host:ip}))) sleep(100);
  return `http://${ip}:${port}`;
};
