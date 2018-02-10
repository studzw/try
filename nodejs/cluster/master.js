const cluster = require('cluster');
const os = require('os');

const workers = new Map();
const cpuLen = os.cpus().length;

cluster.setupMaster({
  exec: 'work.js'
});

cluster.on('fork', () => {
  console.log('fork');
});

cluster.on('online', (worker) => {
  const pid = worker.process.pid;
  console.log('online', pid);
  workers.set(pid, worker);
});

cluster.on('disconnect', (worker) => {
  console.log('disconnect', worker.process.pid);
  cluster.fork();
});

cluster.on('exit', (worker, code, signal) => {
  const pid = worker.process.pid;
  console.log('exit', pid, code, signal);
  workers.get(pid).removeAllListeners();
  workers.delete(pid);
});


for (let i = 0; i < cpuLen; i += 1) {
  cluster.fork();
}
