const http = require('http');

const server = http.createServer((req, res) => {
  res.end(`send message from child, pid is ${process.pid}\n`);
});

process.on('message', (flag, tcp) => {
  if (flag === 'server') {
    tcp.on('connection', (socket) => {
      server.emit('connection', socket);
    });
  }
});
