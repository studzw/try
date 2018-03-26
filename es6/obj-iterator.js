function wrapIterator(obj) {
  obj[Symbol.iterator] = function iterator() {
    let i = 0;
    return {
      next() {
        const objKeys = Object.keys(obj);
        if (i < objKeys.length) {
          return {
            value: obj[objKeys[i++]],
            done: false
          }
        }
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
  return obj;
}

const testObj = wrapIterator({})
testObj.a = 1
testObj.b = 2
testObj.as = function() {return this.a}

for (let value of testObj) {
    console.log(value)
}



