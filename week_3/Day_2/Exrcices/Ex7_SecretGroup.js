//Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"].sort();
let secret_society = '' 


for (let name of names) {
    secret_society +=  name[0]
}

console.log(secret_society)