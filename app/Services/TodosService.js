import { ProxyState } from "../AppState.js";
import { Todos } from "../Models/Todos.js";
import { sandBoxApi } from "./AxiosService.js";

class TodosService {
    async getTodo() {
        const res = await sandBoxApi.get('')
        console.log('get todos', res.data)
        ProxyState.toDos = res.data.map(t => new Todos(t))
        console.log('proxyState Question', ProxyState.toDos)
    }

    async createTodo(todoData) {
        const res = await sandBoxApi.post('', todoData)
        console.log('todos', res.data);
        ProxyState.toDos = [new Todos(res.data), ...ProxyState.toDos]
    }

    async removeTodo(id) {
        const res = await sandBoxApi.delete(`${id}`)
        console.log('deleted', res)
        ProxyState.toDos = ProxyState.toDos.filter(t => t.id !== id)
    }

    async editTodo(todoData, id) {
        const res = await sandBoxApi.put(`${id}`, todoData)
        let editedTodoIndex = ProxyState.toDos.findIndex(t => t.id == id)
        ProxyState.toDos.splice(editedTodoIndex, 1, new Todos(res.data))
        ProxyState.toDos = ProxyState.toDos
    }
}

export const todosService = new TodosService()