//🌟 Exercise 2 : Shopping List

//1
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
//2
const shoppingList = [ "banana", "orange","apple"]
//3 //4
function myBill() {
    let som = 0
    for(let item of shoppingList) {
      if (item in stock && stock[item] !== 0){
        som += prices[item]
        stock[item] -= 1
      }
    }
    const newStock = Object.entries(stock).map(([key,value]) => `\n${key} : ${value}`).join(', ')
    return `The total price of your shoppingList is : ${som}\nand the stoke is ${newStock}`;    
}
//5
console.log(myBill());
//6
 