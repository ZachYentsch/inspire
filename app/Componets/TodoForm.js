export function todoForm() {
    return `
    <form onsubmit="app.todosController.createList()">
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button class="btn btn-success">Create Todo</button>
    </div>
   </form>`
}