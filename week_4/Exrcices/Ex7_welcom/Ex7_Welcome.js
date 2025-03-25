//🌟 Exercise 7 : Welcome


(function (name) {
    let nav = document.querySelector('nav')
    let div = document.createElement("div")
    div.innerHTML = `<img src="profile-picture.png" alt="Profile Picture">
    <span>Welcome, ${name}!</span>`
    nav.appendChild(div)
})('John')

