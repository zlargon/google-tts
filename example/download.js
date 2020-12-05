const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const urlParse = require('url').parse;
const googleTTS = require('..');

function downloadFile(url, dest) {
  return new Promise(function (resolve, reject) {
    const info = urlParse(url);
    const httpClient = info.protocol === 'https:' ? https : http;
    const options = {
      host: info.host,
      path: info.path,
      headers: {
        'user-agent': 'WHAT_EVER',
      },
    };

    httpClient
      .get(options, (res) => {
        // check status code
        if (res.statusCode !== 200) {
          const msg = `request to ${url} failed, status code = ${res.statusCode} (${res.statusMessage})`;
          reject(new Error(msg));
          return;
        }

        const file = fs.createWriteStream(dest);
        file.on('finish', function () {
          // close() is async, call resolve after close completes.
          file.close(resolve);
        });
        file.on('error', function (err) {
          // Delete the file async. (But we don't check the result)
          fs.unlink(dest);
          reject(err);
        });

        res.pipe(file);
      })
      .on('error', reject)
      .end();
  });
}

// start
googleTTS('hello')
  .then((url) => {
    console.log(url); // https://translate.google.com/translate_tts?...

    const dest = path.resolve(__dirname, 'hello.mp3'); // file destination
    console.log('Download to ' + dest + ' ...');

    return downloadFile(url, dest);
  })
  .then(() => {
    console.log('Download success');
  })
  .catch((err) => {
    console.error(err.stack);
  });
