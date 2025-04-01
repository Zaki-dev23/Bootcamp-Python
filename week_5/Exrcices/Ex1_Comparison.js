// 🌟 Exercise 1 : Comparison

function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} the argument is less than or equal to 10`)
        } else {
            reject(`${num} argument is greater than 10.`)
        }
    })
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

  compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))