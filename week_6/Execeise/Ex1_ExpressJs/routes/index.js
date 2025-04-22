const express = require('express')
const router = express.Router()

router.get('/home', function welcom(req, res) {
    res.status(200).json({ message: 'Hello world' })
})

router.get('/about', function about(req, res) {
    res.status(200).json({ message: 'This is about page ' })
})

module.exports = router