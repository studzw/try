process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', (text) => {
  process.stdout.write(text.toUpperCase());
  process.stdout.write('\n\r');
});
