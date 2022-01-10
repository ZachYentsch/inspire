import { ProxyState } from "../AppState.js";
import { todoForm } from "../Componets/TodoForm.js";
import { todosService } from "../Services/TodosService.js";


// ANCHOR Draw todos
function _drawTodos() {
    const todos = ProxyState.toDos
    let template = ''
    todos.forEach(t => template += t.Template)
    document.getElementById('toDos').innerHTML = template
}

export class TodosController {
    constructor() {
        ProxyState.on('todos', _drawTodos)
        console.log('hello from todos controller')
    }
    drawTodos() {
        _drawTodos()
        document.getElementById('modal-body-slot').innerHTML = todoForm()
    }

    async createTodo(user) {
        try {
            window.event.preventDefault()
            let form = window.event.target
            const newTodo = {
                title: form.title.value,
                user: user
            }
            if (user == "undefined") {
                await todosService.createTodo(todoData)
            } else {
                await todosService.editTodo(todoData, user)
            }
            form.reset()
            bootstrap.Modal.getInstance(document.getElementById('todos')).hide()
        } catch (error) {
            console.log(error.message)
        }
    }

    async removeTodo(user) {
        try {
            const foundTodo = ProxyState.toDos.find(t => t.user == user)
            console.log('deleting', foundTodo)
            if (await confirmation(`Are you sure you want to delete ${foundTodo.title}?`)) {
                await todosService.deleteTodo(user)
                toast(`${foundTodo.title} was removed!`)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    async editTodo(user) {
        try {
            let foundTodo = ProxyState.toDos.find(t => t.user == user)

            bootstrap.Modal.getOrCreateInstance(document.getElementById('todos')).toggle()

            document.getElementById('modal-body-slot').innerHTML = todoForm(foundTodo)

            console.log('todo in Edit', foundTodo)
        } catch {
            console.log('error.message');
        }
    }
}
