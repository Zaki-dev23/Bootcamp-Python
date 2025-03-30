//🌟 Exercise 3 : Is it a string ?

const isString = (isString) => {
    if (typeof(isString) === 'string' ) {
        return true
    }
    return false
}

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false