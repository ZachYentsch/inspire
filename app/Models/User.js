
export class User {
    constructor(data) {
        this.id = data.id
        this.name = data.name
    }

    get UTemplate() {
        return /*html*/ `
      <div class="col-12 selectable" onclick="app.usersController.setActiveUser('${this.id}')">
        <h6>${this.name}</h6>
      </div>
      `
    }
}