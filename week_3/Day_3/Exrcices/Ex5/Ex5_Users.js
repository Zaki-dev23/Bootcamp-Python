//🌟 Exercise 5 : Users

//1

//2

//2-1
const div = document.querySelector('div')
// const div = document.querySelector('#countainer') //Ou
console.log(div);
//2-2
const listitem = document.querySelector('li:nth-child(2)')
listitem.textContent = 'Richard'
//2-3
const select_second_ul = document.querySelectorAll('ul')[1]
const delete_second_li = select_second_ul.children[1]
delete_second_li.remove('li:nth-child(2)')
//2-4
const select_uls = document.querySelectorAll('ul')
const edit_name = select_uls[0].children[0]
const edit_name2 = select_uls[1].children[0]
edit_name.textContent = 'zakaria'
edit_name2.textContent = 'zakaria'
// ou
select_uls.forEach(ul => {
    const edit_name = ul.children[0]
    edit_name.textContent = 'Zakaria'
});

//3
//3-1
select_uls.forEach(ul => {
    ul.className = 'student_list'
});
//3-2
const select_first_ul = document.querySelector('ul')
select_first_ul.classList.add('university', 'attendence')

//4
//4-1
div.style.background = 'lightblue'
div.style.padding = '24px'
//4-2
const dan_li = select_second_ul.children[2]
dan_li.style.display = 'none'
//4-3
listitem.style.border = '1px solid blue'
//4-4
const body = document.body
body.style.fontSize = '100px'

//5
select_uls.forEach(ul => {
    if (div.style.background == 'lightblue') {
        const users = Array.from(ul.children).map(e => e.textContent)
        alert(`Hello ${users.join(" and ")}`)
    }
});