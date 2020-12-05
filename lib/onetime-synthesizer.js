if(process.argv.length < 7){
  console.error("node micro-httpd.js <ipaddr> <port> <text> <lang> <speed>");
  process.exit(1);
}
(async()=>{
  const fetch = require('node-fetch');
  const data =
    JSON.parse(
      JSON.parse(
        (await (await fetch("https://translate.google.com/_/TranslateWebserverUi/data/batchexecute", {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          },
          body: "f.req=" + encodeURIComponent(JSON.stringify([
            [
              ["jQ1olc", JSON.stringify([process.argv[4], process.argv[5], parseInt(process.argv[6]) === 1 ? null : true, "null"]), null, "generic"]
            ]
          ]))
        })).text()).replace(/^\)]}'/, '')
      )[0][2]
    )[0];
  const server = require('http').createServer((req,res) => {
    res.writeHead(200,{
      "Access-Control-Allow-Origin":"*",
      "Pragma": "no-cache",
      "Cache-Control" : "no-cache",
      "Content-Type": "audio/mpeg",
      "Content-Type": "application/force-download",
      "Content-Description": "File Transfer",
      "Content-Disposition": "attachment; filename=tts.mp3"
    });
    res.end(Buffer.from(data,"base64"),() => {
      server.destroy(() => {
        process.exit(0);
      });
    });
  }).listen(process.argv[3],process.argv[2]);
  let connections = {};
  server.on('connection', (conn) => {
    let key = conn.remoteAddress + ':' + conn.remotePort;
    connections[key] = conn;
    conn.on('close', () => {
      delete connections[key];
    });
  });
  server.destroy = (cb) => {
    server.close(cb);
    for (let key in connections)
      connections[key].destroy();
  };
})();
