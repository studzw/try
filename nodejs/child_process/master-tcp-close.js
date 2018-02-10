const fork = require('child_process').fork;
const net = require('net');

const child1 = fork('./child.js');
const child2 = fork('./child.js');

const server = net.createServer();

server.on('connection', (socket) => {
  socket.end('send message from master\n');
});

server.listen('2000', () => {
  child1.send('server', server);
  child2.send('server', server);

  server.close();
});
