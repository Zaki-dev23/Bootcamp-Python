// Daily challenge: Stars

//1
// for (let index = 0; index < 7; index++) {
//     console.log('* '.repeat(index));
// }
//2
for (let i = 0; i < 7; i++) {
    row = ''
    for (let j = 0; j < i; j++) {
    row += '* '
}
console.log(row);
}