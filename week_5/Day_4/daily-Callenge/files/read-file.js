const fs = require('fs')
const path = require("path")

const dataPAth = path.join(__dirname ,'file.data.txt')

function readFileContent() {
    
    fs.readFile(dataPAth, 'utf-8', (err, data)=> {
        if (err) {
            console.error('Error reading source file:', err);
            return
        }
        console.log(data);
        
    })
}

module.exports = readFileContent