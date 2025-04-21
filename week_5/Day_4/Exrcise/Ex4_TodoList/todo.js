export class TodoList {
    constructor() {
        this.tasks = []
    }
    addTask(text) {
        const task = {
            id: this.tasks.length + 1,
            desc: text,
            completed: false,
        }
        this.tasks.push(task)
        console.log('Task Added')
    }
    completed(ids){
        const task = this.tasks.find(task => task.id === ids)
        if (task) {
            task.completed = true
            console.log(`Task ${ids} marked as complete.`);
        }else {
            console.log(`Task with ID ${ids} not found.`);
        }
    }
    listTasks(){
        this.tasks.forEach(task => {
            console.log(
                `${task.id}. ${task.desc} [${task.completed ? '✓' : '✗'}]\n`
            )
        })
    }
}