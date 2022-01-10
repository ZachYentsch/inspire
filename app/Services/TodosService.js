import { ProxyState } from "../AppState.js";
import { Todos } from "../Models/Todos.js";
import { sandBoxApi } from "./AxiosService.js";

class TodosService {
    async getTodo() {
        const res = await sandBoxApi.get()
        console.log('get todos', res.data)
        ProxyState.toDos = res.data.map(t => new Todos(t))
        console.log('proxystate todos', ProxyState.toDos)
    }

    async createTodo(todoData) {
        const res = await sandBoxApi.post('create todo', todoData)
        console.log('todos', res.data);
        ProxyState.toDos = [new Todos(res.data), ...ProxyState.toDos]
    }

    async deleteTodo(user) {
        const res = await sandBoxApi.delete(`todos/${user}`)
        ProxyState.toDos = ProxyState.toDos.filter(t => t.user !== user)
    }

    async editTodo(todoData, user) {
        const res = await sandBoxApi.put(`todos/${user}`, todoData)
        let editedTodoIndex = ProxyState.toDos.findIndex(t => t.user == user)
        ProxyState.toDos.splice(editedTodoIndex, 1, new Todos(res.data))
        ProxyState.toDos = ProxyState.toDos
    }
}

export const todosService = new TodosService()