import { ProxyState } from "../AppState.js";
import { Todos } from "../Models/Todos.js";
import { saveState } from "../Utils/LocalStorage.js";

class TodosService {
    constructor() {
        ProxyState.on('todos', saveState)
    }

    createTodo(newTodo) {
        ProxyState.toDos = [new Todos(newTodo), ...ProxyState.toDos]
        console.log('todos', ProxyState.toDos);
    }

    deleteTodo(user) {
        ProxyState.toDos = ProxyState.toDos.filter(t => t.user !== user)
    }
}

export const todosService = new TodosService()