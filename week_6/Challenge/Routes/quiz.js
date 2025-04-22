const express = require('express')
const router = express.Router()
let index = 0
let score = 0

const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
];

router.get('/', (req, res) => {
    if (index < 3) {

        return res.status(200).json(`question ${index + 1} : ${triviaQuestions[index++].question}`)
    } else {
        index = 0
        return res.status(200).json({ message: 'End of questions. Starting over.' });
    }
})

router.post('/', (req, res) => {
    let { answer } = req.body

    if (answer && answer.trim().toLowerCase() === triviaQuestions[index - 1].answer.toLowerCase()) {
        return res.status(200).json({ message: 'Good question! :)', score : ++score })
    }
    return res.status(400).json({ message: 'Bad question! :)' })
})

module.exports = router