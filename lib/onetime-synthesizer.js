if (process.argv.length < 7) {
  console.error("node micro-httpd.js <ipaddr> <port> <text> <lang> <speed>");
  process.exit(1);
}
const server = require('http').createServer(async (req, res) => {
  const fetch = require('node-fetch');
  const data =
    Buffer.from(
      JSON.parse(
        JSON.parse(
          (await (await fetch("https://translate.google.com/_/TranslateWebserverUi/data/batchexecute", {
              method: "POST",
              headers: {
                "content-type": "application/x-www-form-urlencoded"
              },
              body: "f.req=" + encodeURIComponent(JSON.stringify([
                [
                  ["jQ1olc",
                    JSON.stringify([process.argv[4], process.argv[5], parseInt(process.argv[6]) === 1 ? null : true, "null"]),
                    null, "generic"
                  ]
                ]
              ]))
            }))
            .text())
          .replace(/^\)]}'/, '')
        )[0][2]
      )[0], "base64");
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "Content-Type": "audio/mpeg",
    "Content-Length": data.length,
    "Content-Description": "File Transfer",
    "Content-Disposition": "attachment; filename=tts.mp3"
  });
  res.end(data, () => {
    server.destroy(() => {
      process.exit(0);
    });
  });
}).listen(process.argv[3], process.argv[2]);

let connections = {};
server.on('connection', (connection) => {
  const key = `${connection.remoteAddress}:${connection.remotePort}`;
  connections[key] = connection;
  connection.on('close', () => {
    delete connections[key];
  });
});
server.destroy = (callback) => {
  server.close(callback);
  for (let key in connections)
    connections[key].destroy();
};
