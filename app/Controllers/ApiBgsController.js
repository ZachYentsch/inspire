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
    <p class="selectable show qts">${ProxyState.quotes.quote}</p>
    <p class="position-absolute author text-center justify-content-center"><small>${ProxyState.quotes.author}</small></p>
    `
}



// ANCHOR CLOCK FUNCTION
function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec
    let t = setTimeout(function () { currentTime() }, 1000)
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k
    } else {
        return k
    }
}
currentTime()

// REVIEW Remember double strings get swapped for backticks
function _drawRandomImage() {
    document.getElementById("RiMg").style.backgroundImage = `url('${ProxyState.images.img}')`
}

export class ApiBgController {
    constructor() {
        // listeners || subscribers here
        ProxyState.on('quotes', _drawRandomQuote)
        ProxyState.on('images', _drawRandomImage)
        ProxyState.on('weather', this.drawWeather)
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

    async getActiveImage(iMg) {
        try {
            await apiBgsService.ActiveImage(iMg)
        } catch (error) {
            console.error(error)
        }
    }

    async drawWeather() {
        let celsius = ProxyState.weather.temp - 273.15
        let fahr = celsius * 1.8000 + 32
        document.getElementById('weather').innerHTML = `<p class="selectable" onclick="app.apiBgsController.convertW()">${fahr.toFixed(2)} F</p>`
    }

    async convertW() {
        let celsius = ProxyState.weather.temp - 273.15
        document.getElementById('weather').innerHTML = `<p class="selectable" onclick="app.apiBgsController.drawWeather()">${celsius.toFixed(2)} C</p>`
    }

}