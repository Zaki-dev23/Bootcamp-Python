const express = require("express")
const app = express()
const PORT = 5000
let randomEmoji
let score = 0

app.use(express.json())

const emojis = [
    { emoji: '😀', name: 'Grinning' },
    { emoji: '😂', name: 'Laughing' },
    { emoji: '😍', name: 'HeartEyes' },
    { emoji: '🤔', name: 'Thinking' },
    { emoji: '😎', name: 'Sunglasses' },
    { emoji: '😢', name: 'Crying' },
    { emoji: '😡', name: 'Angry' },
    { emoji: '🎉', name: 'Party' },
    { emoji: '🔥', name: 'Fire' },
    { emoji: '👍', name: 'ThumbsUp' },
    { emoji: '🙏', name: 'FoldedHands' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '💡', name: 'Lightbulb' },
    { emoji: '❤️', name: 'Heart' },
    { emoji: '🧠', name: 'Brain' }
];



app.get('/api/emoji', (req, res) => {
    randomEmoji = Math.floor(Math.random() * emojis.length)
    const options = emojis
        .filter(emoji => emojis[randomEmoji] !== emoji)
        .map(emoji => emoji.name)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)
    options.push(emojis[randomEmoji].name)
    res.status(200).json({
        "emoji": emojis[randomEmoji].emoji,
        "options": options.sort(() => Math.random() - 0.5),
        "score" : score
    })
})

app.post('/api/emoji', (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            res.status(400).json({ message: 'Please Enter a name!' })
        }
        const findEmoji = emojis.find(emoji => emoji.name.toLowerCase() === name.toLowerCase())
        console.log(findEmoji)
        console.log(randomEmoji)

        if (!findEmoji) {
            return res.status(400).json({ message: 'Emoji not found, try again!' });
        }

        if (findEmoji.emoji === emojis[randomEmoji].emoji) {
            return res.status(200).json({ message: 'Great is right answer!' , 'score' : ++score })
        } else {
            return res.status(400).json({ message: 'Incorrect emoji, try again!' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error in server!' })
        console.error(`message : ${error}`)
    }

})



app.listen(PORT, console.log(`Server is Running in the Port ${PORT}`))