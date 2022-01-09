import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


// ANCHOR Draw todos
function _drawTodos() {
    let template = ''
    ProxyState.toDos.forEach(t => template += t.Template)
    document.getElementById('toDos').innerHTML = template
}

export class TodosController {
    constructor() {
        ProxyState.on('todos', _drawTodos)
        console.log('hello from todos controller')

    }

    createTodo(user) {
        window.event.preventDefault()
        let form = window.event.target
        const newTodo = {
            title: form.title.value,
            user: user
        }
        todosService.createTodo(newTodo)
        console.log('todo obj', newTodo)
    }

    deleteTodo(user) {
        console.log('user id', user);
        todosService.deleteTodo(user)
    }
}
