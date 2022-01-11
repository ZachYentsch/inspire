import { generateId } from "../Utils/generateId.js"

export class Todos {
    constructor(data) {
        this.description = data.description || ''
        this.id = data.id || generateid()
        this.completed = data.completed || false
    }

    get TTemplate() {
        return `
        ${this.Button}
        <li>${this.description}</li>
            <i i class="mdi mdi-delete-circle-outline selectable" onclick="app.todosController.removeTodo('${this.id}')" ></i> `
    }

    get Button() {
        return `<input type="checkbox" id="done" ${this.completed ? 'checked' : ''} onclick="app.todosController.editTodo('${this.id}')">`
    }
}