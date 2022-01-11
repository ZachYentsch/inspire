import { ProxyState } from "../AppState.js";
import { confirmation, toast } from "../Services/AlertService.js";
import { apiBgsService } from "../Services/ApiBgsService.js";
import { todosService } from "../Services/TodosService.js";


// ANCHOR Draw todos
// REVIEW WHY CANT I GET TODOS TO DRAW TO THE PAGE.
function _drawTodos() {
    const todos = ProxyState.toDos
    let template = ''
    todos.forEach(t => template += t.TTemplate)
    document.getElementById('toDos').innerHTML = template
}

export class TodosController {
    constructor() {
        ProxyState.on('toDos', _drawTodos)
        console.log('hello from toDos controller')

        todosService.getTodo()
    }
    drawTodos() {
        _drawTodos()
        document.getElementById('toDos').innerHTML = template
    }

    async createTodo(id) {
        try {
            window.event.preventDefault()
            console.log('submitted')
            let form = window.event.target
            const todoData = {
                description: form.description.value,
            }
            console.log('new Todo', todoData)
            await todosService.createTodo(todoData)
            form.reset()
        } catch (error) {
            console.error(error)
        }
    }

    async removeTodo(id) {
        try {
            const foundTodo = ProxyState.toDos.find(t => t.id == id)
            console.log('deleting', foundTodo)
            if (await confirmation(`Are you sure you want to delete ${foundTodo.description}?`)) {
                await todosService.removeTodo(id)
                toast(`${foundTodo.description} was removed!`)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    async editTodo(id) {
        try {
            let foundTodo = ProxyState.toDos.find(t => t.id == id)
            document.getElementById('done').inputMode.checked
        } catch {
            console.error; (error);
        }
    }
}
