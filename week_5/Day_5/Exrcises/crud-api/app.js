const express = require('express')
const app = express()
const { fetchPosts } = require('./data/dataService')
const url = 'https://jsonplaceholder.typicode.com/posts'

app.use(express.json())

app.get('/api/posts', async (req, res) => {
    const posts = await fetchPosts(url)
    if (!posts) {
        return res.status(400).json({ message: 'Not Found!' })
    }
    res.status(200).json(posts)
})

app.listen(5000, console.log(`Server is Running in the PORT : ${5000}`))