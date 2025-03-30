//🌟 Exercise 8 : Juice Bar

//Part 1
//1
function makeJuice(size) {
    let juiceSize;
    switch (size) {
        case 'small':
        case 'medium':
        case 'large':
            juiceSize = size
            console.log(`The client wants a ${juiceSize} juice.`);
            break
        default:
            console.log(`You should be choise one size`);

           
    }

    function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
        const ingredients = [firstIngredient, secondIngredient, thirdIngredient]
        console.log(ingredients);

        const sentense = document.querySelector('div')
        const parg = document.createElement('p')
        parg.textContent = `The client wants ${juiceSize} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}`
        parg.style.fontSize = "18px";
        parg.style.color = "#d84315";
        parg.style.fontWeight = "bold";
        parg.style.padding = "10px";
        parg.style.background = "#ffe5d9";
        parg.style.borderRadius = "8px";
        parg.style.textAlign = "center";
        sentense.appendChild(parg)

    }
    addIngredients("Mango", "Strawberry", "Banana")
}

makeJuice('large')

//Part 2
function makeJuice(size) {
    let ingredients = []
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3)
    }

    function displayJuice() {
        const sentence = document.querySelector('div')
        const paragraph = document.createElement('p');
        paragraph.textContent = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;

        paragraph.style.fontSize = "18px";
        paragraph.style.color = "#d84315";
        paragraph.style.fontWeight = "bold";
        paragraph.style.padding = "10px";
        paragraph.style.background = "#ffe5d9";
        paragraph.style.borderRadius = "8px";
        paragraph.style.textAlign = "center";

        sentence.innerHTML = "";
        sentence.appendChild(paragraph);
    }
    addIngredients("Mango", "Strawberry", "Banana");
    addIngredients("Pineapple", "Coconut", "Honey");

    displayJuice();

}

makeJuice('small')