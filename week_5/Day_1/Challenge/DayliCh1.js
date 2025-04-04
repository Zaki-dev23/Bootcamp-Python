// 1st daily challenge

//1
function makeAllCaps(array) {
    return new Promise((resolve, reject) => {

        const allStrings = array.every(item => typeof(item) === 'string')
        console.log(allStrings);
        
        if (allStrings) {
            resolve(array.map(item => item.toUpperCase()))
        } else {
            reject("Array must contain only strings")
        }

    });
}
//2
function sortWords(array) {
    return new Promise((resolve, reject) => {
        if (array.length > 4) {
            resolve(array.sort())
        } else {
            reject("Array must have more than 4 elements to be sorted.")
        }
    });
}

//3
// makeAllCaps([1, "pear", "banana"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))

//in this example, you should see in the console, 
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))