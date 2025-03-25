

let drow = document.querySelector('#drow')
let clear_btn = document.querySelector('.clear')
let colors = document.querySelectorAll('.color')

let rectId = 0
let mouse = false
let takeColor = ''

colors.forEach(color => {
    color.addEventListener('click', () => {
        takeColor = color.getAttribute('color')
        console.log(takeColor);
    })
});

clear_btn.addEventListener('click', () => {
    let all_divs = document.querySelectorAll('#drow div')
    all_divs.forEach(div => {
        div.style.backgroundColor = 'white'
    });
})

for (let index = 0; index < 1900; index++) {
    let div = document.createElement('div')

    div.addEventListener('mousedown', () => {
        mouse = true
    })
    div.addEventListener('mouseup', () => {
        mouse = false
    })

    div.setAttribute('rectId', rectId)
    div.addEventListener('mouseover', () => {
        if (mouse) {
            console.log('mose dans le cas de : ', mouse);
            div.style.backgroundColor = takeColor
        }
    })

    drow.appendChild(div)
    rectId++
}


