// 🌟 Exercise 2 : Work with forms

//1
const from = document.querySelector("form")
console.log(from)

//2
const inputs = document.querySelectorAll("input")
inputs.forEach(element => {
    console.log(element);
});

//3
let firstName = document.getElementsByName("firstname")[0];
let lastName = document.getElementsByName("lastname")[0];
console.log(firstName, lastName);

//4
let firstNameInput = document.getElementById("fname");
let lastNameInput = document.getElementById("lname");


from.addEventListener('submit',()=>{
    event.preventDefault()
    let fname = firstNameInput.value
    let lname = lastNameInput.value

    if (fname === "" || lname === "") {
        alert("Both fields must be filled out!");
        return;
    }
    let ul = document.querySelector(".usersAnswer");

    let fnmae_li = document.createElement("li");
    fnmae_li.textContent = fname;
    ul.appendChild(fnmae_li)
    
    let lname_li = document.createElement("li");
    lname_li.textContent = lname;
    ul.appendChild(lname_li)

})