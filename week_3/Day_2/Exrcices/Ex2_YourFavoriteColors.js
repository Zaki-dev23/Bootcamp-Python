// 🌟 Exercise 2 : Your favorite colors

//1
const colors = ['red', 'pink', 'green', 'black', 'white', 'yallow', 'grey', 'violet', 'blue', 'orange', 'purple', 'brown', 'silver', 'gold', 'red', 'pink', 'green', 'black', 'white', 'yallow', 'grey', 'violet', 'blue', 'orange', 'purple', 'brown', 'silver', 'gold']
const suffix = ['st', 'nd', 'rd', 'th']
//2
for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    console.log(`My #${index} choice is ${element}`);   
}
//3
for (let index = 0; index < colors.length; index++) {

    const value = index.toString().split("")
    i = index + 1
    const element = colors[index];

    if (i == 1 || (value.length > 1 && value[1] == 1 && i != 11)) {
        console.log(`My #${i}${suffix[0]} choice is ${element}`);
    }
    else if (i == 2 || (value.length > 1 && value[1] == 2 && i != 12)) {
        console.log(`My #${i}${suffix[1]} choice is ${element}`);
    }
    else if (i == 3 || (value.length > 1 && value[1] == 3 && i != 13)) {
        console.log(`My #${i}${suffix[2]} choice is ${element}`);
    }
    else
    // if (i >= 4 || index == 11 ,12 ,13)
    {
        console.log(`My #${i}${suffix[3]} choice is ${element}`);
    }
}




