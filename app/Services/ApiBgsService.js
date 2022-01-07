import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/RQuote.js"
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
        // TODO ProxyState.apiBgs = res.data
    }

    async getAllApiWeather() {
        const res = await weatherApi.get('weather')
        console.log(res.data)
        // TODO ProxyState.apiBgs = res.data
    }

    async getActiveQuote(qTe) {
        const res = await quotesApi.get(qTe)
        ProxyState.quotes = new Quote(res.data)
        console.log('hello from activeQuote', ProxyState.quotes)
    }
}

export const apiBgsService = new ApiBgsService()