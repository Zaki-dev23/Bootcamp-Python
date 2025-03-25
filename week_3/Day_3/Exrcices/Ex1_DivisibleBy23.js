//🌟 Exercise 1 : Find the numbers divisible by 23

function displayNumbersDivisible(divisor) {
    let sum = 0
    for (let index = 0; index < 500; index++) {
        let modulo = index % divisor
        if (modulo == 0) {
            console.log(index);
            sum += index
        }
    }
    console.log('the sum of all numbers that are divisible by 23 is :',sum);
    
}

displayNumbersDivisible(3)