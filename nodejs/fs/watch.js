const fs = require('fs');

const argv = process.argv;
const watchArgv = argv.slice(2, argv.length);
watching(watchArgv)

function watching(arr) {
    if (Array.isArray(arr) && arr.length === 0) {
        return console.log('没有监听文件')
    }
    arr.map(filePath => {
      const watcher = fs.watch(filePath, {
        persistent: true,
        recursive: true,
        encoding: 'utf8'
      });
      watcher.on('change', (e, f) => {
       if (~arr.indexOf(f)) return console.log('swap');
       console.log('eventType', e);
       if(f) console.log('filename', f);
      });
      watcher.on('error', e => {
        console.log('error', e);
      })
    })
}
