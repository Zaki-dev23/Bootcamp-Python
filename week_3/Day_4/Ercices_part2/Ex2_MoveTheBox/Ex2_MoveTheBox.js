//🌟 Exercise 2 : Move the box

//1  the code copy structured HTML file.

//2
const button = document.querySelector('button')
const squre = document.querySelector('#animate')
const container = document.getElementById('container')
button.addEventListener('click',myMove)
let intervalId

function myMove() {
    let pos = 0;
    clearInterval(intervalId);

    intervalId = setInterval(function() {
        if (pos > 350) {
            clearInterval(intervalId);
            
        }else{
            squre.style.left = pos + "px";
            pos++;
        }
    }, 1);
}
