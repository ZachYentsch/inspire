import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Todos {
    constructor(data) {
        this.title = data.title || ''
        this.id = generateId()
        this.user = data.userId
    }

    get Template() {
        return `
        <li>${this.title} <i class="mdi mdi-delete-circle-outline selectable" onclick="app.todosController.deleteTodo('${this.user}')"></i>
        </li> 
        <form onsubmit="app.todosController.createTodo('${this.user}')">`
    }
}