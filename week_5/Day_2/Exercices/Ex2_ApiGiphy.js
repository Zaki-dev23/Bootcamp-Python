// 🌟 Exercice 2 : API Giphy

//1

//2

const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const searchQuery = 'sun';
const limit = 10;
const offset = 2;

const url = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&limit=${limit}&offset=${offset}&rating=g&api_key=${apiKey}`

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error : ", response.status);
        }
        return response.json()
    })
    .then(data => console.log(data.data))
    .catch(err => console.error("Fetch error : ", err))