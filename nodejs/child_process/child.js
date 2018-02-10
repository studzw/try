process.on('message', (flag, server) => {
  if (flag === 'server') {
    server.on('connection', (socket) => {
      socket.end(`send message from child, pid is ${process.pid}\n`);
    });
  }
});
