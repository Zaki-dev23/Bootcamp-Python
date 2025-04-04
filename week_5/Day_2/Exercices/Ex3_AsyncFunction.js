// 🌟 Exercise 3 : Async function

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

async function getData() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/")

        if (!response.ok) {
            throw new Error("Error");
        }
        const data = await response.json()
        console.log(data.result);

    } catch (error) {
        console.error('Error : ', error);
    }
}

getData()