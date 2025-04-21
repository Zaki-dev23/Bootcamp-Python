const fs = require('fs')
const path = require('path')


function readFile(file, callback) {
    fs.readFile(file, "utf-8", (err, data) => {
        if (err) return callback(err, null)
        callback(null, data)
    })
}

function writeFile(file, content, callback) {
    fs.writeFile(file, content, (err, data) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, data)
            console.log('Write operation complete.');
        }
    })
}




module.exports = { readFile, writeFile }