// 🌟 Exercise 2 : Colors #2

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];


for (const color in colors) {

    if (color == 1) {
        console.log(`${parseInt(color) + 1}${ordinal[2]} chice is ${colors[color]}`);
    } else if (color  == 2) {
        console.log(`${parseInt(color) + 1}${ordinal[3]} chice is ${colors[color]}`);
    } else if (color  == 3) {
        console.log(`${parseInt(color) + 1}${ordinal[0]} chice is ${colors[color]}`);
    } else {
        console.log(`${parseInt(color) + 1}${ordinal[1]} chice is ${colors[color]}`);
    }
}