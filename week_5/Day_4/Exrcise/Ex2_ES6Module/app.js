const { people } = require('./data')

console.log(people);


function avgAge(people) {
    let sum = people.reduce((acc, person) => acc + person.age, 0)
    return sum / people.length
}

console.log(avgAge(people))
//28.5