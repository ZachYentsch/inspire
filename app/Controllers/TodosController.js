import { ProxyState } from "../AppState.js";
import { confirmation, toast } from "../Services/AlertService.js";
import { todosService } from "../Services/TodosService.js";


// ANCHOR Draw todos
// REVIEW WHY CANT I GET TODOS TO DRAW TO THE PAGE.
function _drawTodos() {
    const todos = ProxyState.toDos
    let template = ''
    todos.forEach(t => template += t.Template)
    document.getElementById('toDos').innerHTML = template
}

export class TodosController {
    constructor() {
        ProxyState.on('todos', _drawTodos)
        console.log('hello from toDos controller')
    }
    drawTodos() {
        _drawTodos()
        document.getElementById('todos').innerHTML = template
    }

    async createTodo(user) {
        try {
            window.event.preventDefault()
            let form = window.event.target
            const newTodo = {
                title: form.title.value,
                user: user
            }
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

    // async editTodo(user) {
    //     try {
    //         let foundTodo = ProxyState.toDos.find(t => t.user == user)

    //         document.getElementById('todos').innerHTML =

    //         console.log('todo in Edit', foundTodo)
    //     } catch {
    //         console.log('error.message');
    //     }
    // }
}
