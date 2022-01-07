import { ProxyState } from "../AppState.js"
import { apiBgsService } from "../Services/ApiBgsService.js"

// Get Functions
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
        await apiBgsService.getAllApiWeather()
    } catch (error) {
        console.error(error)
    }
}
// Draw functions
function _drawRandomQuote() {
    document.getElementById('quote').innerHTML = `
    <p>${ProxyState.quotes.quote}</p>
    <p><small>${ProxyState.quotes.author}</small></p>
    `
}


export class ApiBgController {
    constructor() {
        // listeners || subscribers here
        ProxyState.on('quotes', _drawRandomQuote)
        // invoke a function here
        _getAllImgs()
        _getAllQuotes()
        _getWeather()
    }

    async getActiveQuote(qTe) {
        try {
            await apiBgsService.ActiveQuote(qTe)
        } catch (error) {
            console.error(error)
        }
    }

}