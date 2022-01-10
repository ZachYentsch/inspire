import { ProxyState } from "../AppState.js";
import { Todos } from "../Models/Todos.js";

export function saveState() {
    localStorage.setItem('List', JSON.stringify({
        Todos: ProxyState.todos,

    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('list'))
    console.log('load state data', data);
    if (data != null) {
        ProxyState.todos = data.todos.map(t => new Todos(t))
        console.log('load state', ProxyState.todos);
    }
}