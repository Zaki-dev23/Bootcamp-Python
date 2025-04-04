// 🌟 Exercice 1 : API Giphy

const url = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error : ", response.status);
        }
        return response.json()
    })
    .then(data => console.log(data.data))
    .catch(err => console.error("Fetch error : ", err))