const express = require('express')
const router = express.Router()

// Sample in-memory database for storing to-do items
const todos = [];


// New task
router.post('/todo', (req, res) => {
    const { todo } = req.body
    if (!todo) {
        return res.status(404).json({ message: 'Inavalid task!' })
    }
    const task = {
        id: todos.length + 1,
        todo: todo
    }
    todos.push(task)
    return res.status(200).json({ message: 'The todo added!' })
})

// Get all tasks
router.get('/todo', (req, res) => {
    res.status(200).json(todos)
})

//Update a todo by id
router.put('/todo/:id', (req, res) => {
    const todo_id = parseInt(req.params.id)
    const { todo } = req.body

    const existingTodo = todos.find(todo => todo.id === todo_id)

    if (!existingTodo) {
        return res.status(400).json({ message: 'this todo does not exist' })
    }
    existingTodo.todo = todo

    return res.status(200).json({ message: 'Todo updated successfully', updatedTodo: existingTodo })
})

//Delete a todo by id
router.delete('/todo/:id', (req, res) => {
    const todo_id = parseInt(req.params.id)
    const existingTodo = todos.findIndex(todo => todo.id === todo_id)

    if (!existingTodo === -1) {
        return res.status(404).json({ message: 'this todo does not exist' })
    }

    todos.splice(existingTodo, 1)
    return res.status(200).json({ message: 'Todo deleted successfully' })

})

module.exports = router