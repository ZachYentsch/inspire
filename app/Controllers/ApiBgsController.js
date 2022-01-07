import { ProxyState } from "../AppState.js"
import { apiBgsService } from "../Services/ApiBgsService.js"


async function _getAllQuotes() {
    try {
        await apiBgsService.getAllApiQuotes()
    } catch (error) {
        console.error(error)
    }
}

async function _getAllImgs() {
    try {
        await apiBgsService.getAllApiImgs()
    } catch (error) {
        console.error(error)
    }
}

async function _getWeather() {
    try {
        await apiBgsService.getAllApiWeather
    } catch (error) {
        console.error(error)
    }
}

function _drawRandomBg() {

}



export class ApiBgController {
    constructor() {
        // listeners || subscribers here

        // invoke a function here
        _getAllImgs()
        _getAllQuotes()
        _getWeather()
    }

    // async getActiveToDo() {
    //     try {

    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

}