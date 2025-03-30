// 🌟 Exercise 6 : Challenges


//1
// console.log([2] === [2])//OUTPUT : False
// console.log({} === {});//OUTPUT : False

//2
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number)//OUTPUT : 4
console.log(object3.number)//OUTPUT : 4
console.log(object4.number)//OUTPUT : 5

//1

class Animal {
    constructor(name, type, color) {
        this.name = name
        this.type = type
        this.color = color
    }
}

//2
class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }
        sound = (sound) => {
    return `
            Name : ${this.name},
            Type : ${this.type},
            Color : ${this.color},
            Sound : ${sound}
            sentence : ${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}.`
}
}
// const animal = new Mammal('poppy', 'dog', 'black')
// console.log(animal.sound('Woof Braf'));

//3

const farmerCow = new Mammal('Lily', 'cow', 'brown and white')
console.log(farmerCow.sound('Moooo'));
