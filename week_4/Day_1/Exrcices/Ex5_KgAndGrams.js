//🌟 Exercise 5 : Kg and grams

//1 function declaratio,
function KgToGrams(inKg) {
    const a = inKg * 1000
    return a
}
//2 functoin 
const kgToGram = function (inKg) {
    const a = inKg * 1000
    return a
} 


//3
//// Function declaration is hoisted, function expression is not

//4
const kgToGrams = (inKg) => { return inKg * 1000}

console.log(kgToGram(20));
