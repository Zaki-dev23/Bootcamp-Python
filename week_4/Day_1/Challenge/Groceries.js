let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

//1
let displayGroceries = () => {
    let fruits = groceries.fruits
    fruits.forEach(fruit=>{
       console.log(fruit);
    })
}
displayGroceries()

//2
let cloneGroceries = () => {
    let user = client
    client = "Betty"
    console.log(client);
    console.log(user);
    //In the user variable we don't see the modification
    // car user is a copy of the client variable.

    let shopping = groceries

    shopping.totalPrice = '35$'
    shopping.other.paid = false

    console.log(shopping);
    console.log(groceries);
    //The shopping and groceries are the same object in the memoire (Pass by reference)
    
}

cloneGroceries()