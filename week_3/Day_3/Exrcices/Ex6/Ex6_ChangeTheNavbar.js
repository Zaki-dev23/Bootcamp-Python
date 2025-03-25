//🌟 Exercise 6 : Change the navbar

//1 Add the code above, to your HTML file

//2
const div = document.querySelector('div')
div.setAttribute('id', 'socialNetworkNavigation')

//3
//3-1
const new_li = document.createElement('li')
//3-2
const logout = document.createTextNode('Logout')
//3-3
new_li.appendChild(logout)
//3-4
const select_ul = document.querySelector('ul')
select_ul.appendChild(new_li)

//4
const first_li = select_ul.firstElementChild
const last_li = select_ul.lastElementChild

console.log(first_li.textContent);
console.log(last_li.textContent);

