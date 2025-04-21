import { TodoList } from "./todo.js";

const todo = new TodoList()

todo.addTask('Complet ths week')
todo.addTask('Learn JavaScript');
todo.addTask('Build a Todo App');
todo.addTask('Master Node.js');

todo.completed(2)
todo.completed(4)

todo.listTasks()