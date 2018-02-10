const http = require('http');

http.createServer((req, res) => {
  // throw new Error('some error');
  res.end(`send message from child, pid is ${process.pid}\n`);
}).listen(2000);
