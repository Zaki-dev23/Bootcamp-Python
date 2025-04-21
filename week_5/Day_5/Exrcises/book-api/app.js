const express = require('express')
const app = express()

app.use(express.json())

const data = [
    {
        id: 1,
        title: "book 1",
        author: "author 1",
        publishedYear: '2001'
    },
    {
        id: 2,
        title: "book 2",
        author: "author 2",
        publishedYear: '1987'
    },
    {
        id: 3,
        title: "book 3",
        author: "author 3",
        publishedYear: '1977'
    },
]

/**
 * @desc Read all books
 * @router /api/books
 * @method GET
 * @access public
 */
app.get('/api/books', (req, res) => {
    res.status(200).json(data)
})

/**
 * @desc Read book by id
 * @router /api/books/bookId
 * @method GET
 * @access public
 */
app.get('/api/books/:bookId', (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId)
        console.log(bookId);

        if (isNaN(bookId)) {
            return res.status(404).json({ message: 'ID is not a number!' })
        }
        const book = data.find(item => item.id === bookId)
        if (!book) {
            return res.status(404).json({ message: 'The book is not found' })
        }
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json({ message: 'The book is not found' })
    }
})

/**
 * @desc Post new book
 * @router /api/books
 * @method GET
 * @access public
 */
app.post('/api/books', (req, res) => {
    try {
        const { title, author, publishedYear } = req.body
        if (!title || !author || !publishedYear) {
            res.status(404).json({ message: 'Invalid title, author or publishedYear' })
        }
        newBook = {
            id: data.length + 1,
            title,
            author,
            publishedYear
        }
        data.push(newBook)
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({ message: 'Failed to add the book' })
    }
})

app.listen(5000, () => { console.log(`Server is running ${5000}`) })