//Exercise 3 : What’s in my wallet ?

const item_price = 0.75
const amount_of_change = [0,0,20,5]
const adnp = [0.25,0.10,0.05,0.01]
//1
function changeEnough(itemPrice, amountOfChange) {
    
    let sum_of_change = 0
    for (let i in adnp) {
       sum_of_change += adnp[i] * amount_of_change[i]
    }
    if (sum_of_change >= itemPrice) {
        return true
    } else {
        return false
    }
}

console.log(changeEnough(item_price,amount_of_change));

