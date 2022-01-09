import { ProxyState } from "../AppState.js"
import { ApiBgController } from "../Controllers/ApiBgsController.js"
import { Image } from "../Models/RImage.js"
import { Quote } from "../Models/RQuote.js"
import { Weather } from "../Models/RWeather.js"
import { imagesApi, quotesApi, weatherApi } from "./AxiosService.js"



class ApiBgsService {
    async getAllApiQuotes() {
        const res = await quotesApi.get('quotes')
        console.log(res.data)
        ProxyState.quotes = new Quote(res.data)
    }

    async getAllApiImgs() {
        const res = await imagesApi.get('images')
        console.log(res.data)
        ProxyState.images = new Image(res.data)
    }

    async getAllApiWeather() {
        const res = await weatherApi.get('weather')
        console.log(res.data)
        ProxyState.weather = new Weather(res.data)
    }

    async getActiveQuote(qTe) {
        const res = await quotesApi.get(qTe)
        ProxyState.quotes = new Quote(res.data)
        console.log('hello from activeQuote', ProxyState.quotes)
    }

    async getActiveImage(iMg) {
        const res = await imagesApi.get(iMg)
        ProxyState.images = new Image(res.data)
        console.log('hello from activeImage', ProxyState.images)
    }

}

export const apiBgsService = new ApiBgsService()