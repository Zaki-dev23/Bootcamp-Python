// Exercise 6 : Rudolf

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }

  let sentenace = ''
for (const item in details){
    sentenace += `${item} ${details[item]} `
}
console.log(sentenace);