const str = 'test';
const obj = { a: 'a' };
console.log('t');
console.log('%s', str);
console.log('%d', 123);
console.log('%j', obj);
console.error('Error', obj);

// node console1.js 1> info.log
// node console1.js 2> error.log
