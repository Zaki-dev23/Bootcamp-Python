const fname = document.getElementById('fname').value
const lname = document.getElementById('lname').value
const btn = document.getElementById('btn')

const displayJson = document.querySelector('.json')

const jsonData = {
    firstName : fname,
    lastName : lname
}

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    displayJson.textContent = JSON.stringify(jsonData,null,2);
})