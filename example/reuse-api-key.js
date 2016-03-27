var key = require('../lib/key');
var tts = require('../lib/api');

/* only get API key from google once */
key()
.then(function (key) {
  var list = ['hi', 'hello', 'hello world'];

  list.forEach(function (text) {
    console.log(tts(text, key, 'en', 1));
  });
})
.catch(console.error);
