import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Todos {
    constructor(data) {
        this.title = data.title
        this.id = generateId()
        this.user = data.userId
    }

    get Template() {
        return `
        <li>${this.title} <i class="mdi mdi-delete-circle-outline selectable" onclick="app.todosController.deleteTodo('${this.user}')"></i>
        </li> 
        <form onsubmit="app.todosController.createTodo('${this.user}')">
                  <div class="form-group d-flex">
                    <input type="text" class="form-control" name="title" id="form-control" placeholder="Text Here...">
                    <button class="btn btn-light">+</button>`
    }

    get Todo() {
        let template = ''
        let foundTodo = ProxyState.toDos.filter(t => t.user == this.user)
        foundTodo.forEach(t => template += t.Template)
        return template
    }
}