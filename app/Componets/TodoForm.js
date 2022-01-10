import { Todos } from "../Models/Todos.js"

export function todoForm(todoData = {}) {
    const newTodo = new Todos(todoData)
    return `
    <form onsubmit="app.todosController.createTodo('${newTodo.user}')">
  <div class="mb-3 d-flex justify-content-between">
      <label for="title" class="form-label">Title</label>
      <textarea type="text" class="form-control" name="title" id="title"
        aria-describedby="title" placeholder="Todo..." min="4" max="250" value="${newTodo.title}" required> </textarea>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">${newTodo.user ? 'Edit' : 'Create'}</button>
  </div>
</form >`
}