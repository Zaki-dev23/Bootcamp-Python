// 🌟 Exercise 1 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow","Violet"];

//1
colors.forEach(color => {
console.log(`${colors.indexOf(color) + 1}# chice is ${color}`);
})
//1
for (const color in colors) {
    console.log(`${parseInt(color) + 1}# chice is ${colors[color]}`);
}
//2
let indexOfViolet = colors.indexOf('Violet')

if (indexOfViolet == colors.length ) {
    console.log("Yeah");
} else console.log("No...");
