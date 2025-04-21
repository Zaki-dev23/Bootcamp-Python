const fs = require('fs')

fs.readdir(__dirname, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err)
        return
    }
    console.log('files in this directory: ');
    files.forEach(element => {
        console.log(element);
    });
})

