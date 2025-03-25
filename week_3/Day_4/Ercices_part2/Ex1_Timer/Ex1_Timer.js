// 🌟 Exercise 1: Timer

// Part I - Alert after 2 seconds
setTimeout(function() {
    alert("hello world");
}, 2000);

// Part II - Add a paragraph after 2 seconds
const div = document.querySelector("div");
setTimeout(function() {
    const p = document.createElement("p");
    p.textContent = "Hello World!";
    div.appendChild(p);
}, 2000);

// Part III - Add a paragraph every 2 seconds
const div1 = document.querySelector("div");
let intervalId = setInterval(function() {
    if (document.querySelectorAll('p').length >= 5) {  // Stop after 5 paragraphs
        clearInterval(intervalId);
    } else {
        const p = document.createElement('p');
        p.textContent = "hello world";
        div1.appendChild(p);
    }
}, 2000);

// Stop interval when clicking the button
const button = document.querySelector("#clear"); 
button.addEventListener("click", function() {
    clearInterval(intervalId);
    console.log("stop");
    
});
