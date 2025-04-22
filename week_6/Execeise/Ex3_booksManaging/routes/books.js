const express = require('express')
const router = express.Router()


let books = []

// New book
router.post('/', (req, res) => {
    const { title, author } = req.body
    if (!title || !author) {
        return res.status(404).json({ message: 'Title and author are required' })
    }
    const newBook = {
        id: books.length + 1,
        title: title,
        author: author,
    }
    books.push(newBook)
    return res.status(201).json({ message: 'Book added successfully', book: newBook })
})

// Get all tasks
router.get('/', (req, res) => {
    res.status(200).json(books)
})

//Update a todo by id
router.put('/:id', (req, res) => {
    const book_id = parseInt(req.params.id)
    const { title, author } = req.body

    const existingBook = books.find(book => book.id === book_id)

    if (!existingBook) {
        return res.status(400).json({ message: 'this todo does not exist' })
    }
    existingBook.title = title || existingBook.title;
    existingBook.author = author || existingBook.author;

    return res.status(200).json({ message: 'Book updated successfully', existingBook  })
})

//Delete a todo by id
router.delete('/:id', (req, res) => {
    const book_id = parseInt(req.params.id)
    const index = books.findIndex(todo => todo.id === book_id)

    if (!index === -1) {
        return res.status(404).json({ message: 'this todo does not exist' })
    }
    books.splice(index, 1)
    return res.status(200).json({ message: 'Todo deleted successfully' })
})

module.exports = router