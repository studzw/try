const Writable = require('stream').Writable
const https = require('https')

class CountStream extends Writable {
    constructor(matchText) {
        super()
        this.count = 0
        this.matcher = new RegExp(matchText, 'ig')
    }

    _write(chunk, encoding, cb) {
        let matches = chunk.toString().match(this.matcher)
        if(matches) {
            this.count += matches.length
        }
        cb()
    }
    
    end() {
        this.emit('total', this.count)
    }

}

const countStream = new CountStream('te')
https.get('https://www.baidu.com', res => {
    res.pipe(countStream)
})
countStream.on('total', count => {
    console.log('total matches', count)
})

