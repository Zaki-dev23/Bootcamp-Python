//🌟 Exercise 1 : List of people

//Part I - Review about arrays


const people = ["Greg", "Mary", "Devon", "James"];
// 1
index = people.indexOf("Greg")
const people1 = people.filter( e => e !== "Greg"?  e : null)
const people3 = people.splice( index, 1)
console.log(people1);
console.log(people);
//2
const people2 = people.map( e => e == "James"?  "Jason" : e)
console.log(people2);
//3
people2.push("zakaria")
console.log(people2);
//4
indexOfMary = people2.indexOf("Mary")
console.log(indexOfMary);
//5
peopleWithoutMary = people2.slice(1,-1)
console.log(peopleWithoutMary);
//6
indexOfFoo = people.indexOf('Foo')
console.log(indexOfFoo);
//is returned -1 that's mean false or not found
//7
const last = people[people.length -1]
console.log(last);

//----------------------------------------------------//
//Part II - Loops

//1
for (const item in people){
    console.log(people[item])
}
//2
for (const item in people){
    if (people[item] === "Devon") {
        console.log(people[item]);
        break
    }
    console.log(people[item])
}