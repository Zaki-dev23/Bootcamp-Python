const express = require('express')
const app = express()

app.use(express.json())

let data = [
    {
        id: 1,
        title: "blog 1",
        content: "This is bolg content 1"
    },
    {
        id: 2,
        title: "blog 2",
        content: "This is bolg content 2"
    },
    {
        id: 3,
        title: "blog 3",
        content: "This is bolg content 3"
    },
]

/**
 * @desc get Posts
 * @route /posts
 * @method Get
 * @access public
*/
app.get('/posts', (req, res) => {
    try {
        res.status(200).json(data)
    } catch (error) {
        console.log('Error :', error);
    }
})


/**
 * @desc Get post by id
 * @route /posts/:id
 * @method Post
 * @access public 
 */
app.get('/posts/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id)
        if (!id) {
            throw new Error("Id Invalid");
        }
        const post = data.find(item => id === item.id)
        if (!post) {
            return res.status(404).json({ message: 'Post not found' })
        }
        res.status(200).json(post)
    } catch (error) {
        console.log('Error :', error);
    }
})

/**
 * @desc Post new posts
 * @router /posts
 * @method POST
 * @access public
 */
app.post('/posts', (req, res) => {
    try {
        const { id, title, content } = req.body
        if (!id || !title || !content) {
            throw new Error("id ,title or content are required");
        }
        const newPost = {
            id: id,
            title: title,
            content: content
        }
        data.push(newPost)
        res.status(201).json(newPost)
    } catch (error) {
        console.log('Error :', error);
    }
    res.status(400).json({ message: 'id ,title or content are required' })

})

/**
 * @desc Update a post
 * @router /posts/:id
 * @method PUT
 * @access public
*/
app.put('/posts/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id)
        if (isNaN(id)) {
            throw new Error("Please id is Number!");
        }
        const postIndex = data.findIndex(item => item.id === id)

        updatePost = {
            id: req.body.id,
            title: req.body.title,
            content: req.body.content
        }
        data[postIndex] = { updatePost }
        res.status(201).json(data)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Incomplet Update Post' })
    }
})

/**
 * @desc delete post
 * @method DELETE
 * @router /posts/:id
 * @access public
 */
app.delete('/posts/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const postIndex = data.findIndex(item => item.id === id)

        if (postIndex === -1) {
            // throw new Error("The posts is not found!");
            return res.status(404).json({ message: 'Post not found' });
        }
        data.splice(postIndex, 1)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ message: 'Delete is not complet!' })
    }
})

app.listen(3000, () => { console.log(`Server in Running in the Port ${3000}`) })