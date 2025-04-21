const { readFile , writeFile } = require('./fileManager')


const helloWorld = __dirname + '/hello world.txt';
const byeWorld = __dirname + '/bye world.txt';

readFile(helloWorld, (err, data) => {
    if (err) return console.error('Read error:', err);
    console.log('File content:', data);
})

writeFile(byeWorld, 'Writing to file', (err, data) => {
    if (err) return console.error('write error:', err)
    console.log('File content : ', data)
})