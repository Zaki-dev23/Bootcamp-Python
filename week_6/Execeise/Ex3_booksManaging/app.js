const express = require('express')
const app = express()


app.use(express.json())

app.get('/books', (req, res) => {
    res.send('Server is alive!');
});

app.listen(5000, () => console.log('Server in rinning on the port 5000'))