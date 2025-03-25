//Daily challenge: Not Bad

//1
const sentence = 'The movie is not that bad, I like it'
//2
const wordNot = sentence.indexOf('not')
console.log('The position of word "not" is :',wordNot);
//3
const wordBad = sentence.indexOf('bad')
console.log('The position of word "bad" is :',wordBad);
//4
if (wordBad > wordNot) {
    let newSentance = sentence.slice(0,wordNot).concat('good') + sentence.slice(wordBad + 3)
    console.log(newSentance);
}
else{
    console.log(sentence);
}
//5




