/**
 * Generate "Google TTS" audio download link
 *
 * @param   {String}  text   length should be less than 200 characters
 * @param   {String}  key
 * @param   {String!} lang   default is 'en'
 * @param   {Number!} speed  show = 0.24, default is 1
 * @return  {String}  url
 */
module.exports = async (text, lang, speed) => {
  if (typeof text !== 'string' || text.length === 0) {
    throw new TypeError('text should be a string');
  }

  if (text.length > 200) {
    throw new RangeError('text length (' + text.length + ') should be less than 200 characters');
  }

  if (typeof lang !== 'undefined' && (typeof lang !== 'string' || lang.length === 0)) {
    throw new TypeError('lang should be a string');
  }

  if (typeof speed !== 'undefined' && typeof speed !== 'number') {
    throw new TypeError('speed should be a number');
  }
  const ip =   require('my-ip')();
  const port = await require('get-port')();
  require('child_process').spawn("node",["lib/onetime-synthesizer.js",ip,port,text,lang || 'en' , speed || 1 ],{
    detached: true,
    stdio: ['ignore', 'ignore', 'ignore']
  }).unref();
  return `http://${ip}:${port}`;
};
