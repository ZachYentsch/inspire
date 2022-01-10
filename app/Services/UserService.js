import { ProxyState } from "../AppState.js";
import { User } from "../Models/User.js";
import { sandBoxApi } from "./AxiosService.js";
class UsersService {
    async getAllUsers() {
        const res = await sandboxApi.get()
        console.log('get all users res', res.data)
        ProxyState.users = res.data.map(p => new User(u))
        console.log('ProxyState players', ProxyState.users)
    }

    async addUser(newUser) {
        const res = await sandboxApi.post('', newUser)
        ProxyState.users = [...ProxyState.users, new User(res.data)]
        console.log('ProxyState user', ProxyState.users);
    }

    setActiveUser(id) {
        let foundUser = ProxyState.users.find(u => u.id == id)
        ProxyState.activeUser = foundUser
        console.log('found user in service', foundUser)
    }

    async editUser() {
        const res = await sandboxApi.put(`${ProxyState.activeUser.id}`, ProxyState.activeUser)
        let foundUserIndex = ProxyState.users.findIndex(u => u.id == ProxyState.activeUser.id)
        ProxyState.users.splice(foundUserIndex, 1, new User(res.data))
        ProxyState.users = ProxyState.users
        console.log('edit user res', res.data)
    }
}

export const usersService = new UsersService()