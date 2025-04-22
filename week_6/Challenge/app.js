const express = require('express')
const app = express()
const quizRoutre = require('./Routes/quiz')

app.use(express.json())

app.use('/quiz', quizRoutre)

app.listen(5000, () => console.log('server is rinning on the port 5000'))