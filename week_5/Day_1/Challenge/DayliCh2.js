// 2nd daily challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

//1

function ToJs() {
    return new Promise((resolve, reject) => {
        let morseToJs = JSON.parse(morse)
        if (morseToJs.length == 0) {
            reject('the morse javascript object is empty')
        } else {
            return resolve(morseToJs)
        }
    })
}

const userSaise = "Hello"
function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        
        const sentenceSplit = userSaise.toLowerCase().split("")
        const result = []

        for (const char of sentenceSplit) {
            if (!morseJS[char]) {
                reject(`if the user entered the word "${userSaise}", the promise rejects because the character "${char}" doesn't exist in the morse javascript object`)
                return;
            }
            result.push(morseJS[char])
        }
        console.log(`${userSaise} gives you`);
        resolve(result)
    })
}

function joinWords(morseTranslatation) {
    return morseTranslatation.join('.\n')
}


ToJs()
    .then(ToJs => toMorse(ToJs))
    .then(el => console.log(joinWords(el)))
    .catch('error')