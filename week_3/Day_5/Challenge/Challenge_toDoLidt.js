//Daily Challenge: Todo list


//3
//3-1
const tasks = []
const tasks2 = []
let taskId = 0

//3-2
const Btn = document.getElementsByTagName('button')[0]
const input = document.getElementsByTagName('input')
const div = document.querySelector('div')
const ul = document.createElement('ul')
div.appendChild(ul)

// function addTask() {
//     if (input[0].value == "") {
//         alert('Invalaid input!')
//     } else {
//         tasks.push(input[0].value)

//         const li = document.createElement('li')

//         const delete_btn = document.createElement('button')
//         delete_btn.setAttribute('class', 'delete_btn')
//         delete_btn.textContent = 'X'

//         const check_box = document.createElement('input')
//         check_box.setAttribute('type', 'checkbox')

//         const textSpan = document.createElement('span');
//         textSpan.textContent = input[0].value
//         li.style.textAlign = 'start'

//         li.appendChild(delete_btn)
//         li.appendChild(check_box)
//         li.appendChild(textSpan)
//         ul.appendChild(li)
//         input[0].value = ''
//     }
// }


// Btn.addEventListener('click', addTask)


//3 - Bonus I
function addTask(e) {
    e.preventDefault()
    if (input[0].value == "") {
        alert('Invalaid input!')
    } else {
        const task = {
            task_id : taskId,
            text : input[0].value,
            done : false
        }
        
        tasks2.push(task)
        
        const li = document.createElement('li')
        li.setAttribute('data-task-id', taskId);
        
        const delete_btn = document.createElement('button')
        delete_btn.setAttribute('class', 'delete_btn')
        delete_btn.textContent = 'X'
        delete_btn.addEventListener('click', deleteTask )

        const check_box = document.createElement('input')
        check_box.setAttribute('type', 'checkbox')
        check_box.addEventListener('click', doneTask )
        
        const textSpan = document.createElement('span');
        textSpan.textContent = task.text
        
        li.style.textAlign = 'start'
        li.appendChild(delete_btn)
        li.appendChild(check_box)
        li.appendChild(textSpan)
        ul.appendChild(li)
        input[0].value = ''
        taskId++;
    }
}

function doneTask(e) {
    const taskId = e.target.parentNode.getAttribute('data-task-id')
    const task_index = tasks2.findIndex(task => task.task_id == taskId)
    tasks2[task_index].done = true
    e.target.parentNode.querySelector('span').style.color = 'red'
    e.target.parentNode.querySelector('span').style.textDecoration = 'line-through'
    
}

Btn.addEventListener('click', addTask)

//4 Bonus II

function deleteTask(e) {
    const taskId = e.target.parentNode.getAttribute('data-task-id')
    const task_index = tasks2.findIndex(tast => tast.task_id == taskId)
    tasks2.splice(task_index, 1)
    e.target.parentNode.remove()


}

