// 🌟 Exercise 3 : Resolve & Reject

//1
let value = 3
Promise.resolve(value).then(console.log(value))

//2
Promise.reject("Boo!").then(console.log)