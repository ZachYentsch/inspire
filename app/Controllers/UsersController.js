import { ProxyState } from "../AppState.js"
import { usersService } from "../Services/UsersService.js"

function drawUsers() {
    let template = ''
    ProxyState.users.forEach(u => template += u.Template)
    document.getElementById('users').innerHTML = template
}

function drawActiveUser() {
    document.getElementById('active-User').innerHTML = ProxyState.activeUser.name
}

export class UsersController {
    constructor() {
        ProxyState.on('users', drawUsers)
        ProxyState.on('activeUser', drawActiveUser)
        usersService.getAllUsers()
    }

    async addUser() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            const newUser = {
                name: form.name.value
            }
            console.log('new player obj', newUser)
            await usersService.addUser(newUser)
            form.reset()
        } catch (error) {
            console.log(error.message)
        }
    }

    setActiveUser(id) {
        usersService.setActiveUser(id)
    }
}