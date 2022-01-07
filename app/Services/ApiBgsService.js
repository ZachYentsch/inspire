import { ProxyState } from "../AppState.js"
import { imagesApi, quotesApi, weatherApi } from "./AxiosService.js"



class ApiBgsService {
    async getAllApiQuotes() {
        const res = await quotesApi.get('quotes')
        console.log(res.data.results)
        ProxyState.apiBgs = res.data.results
    }

    async getAllApiImgs() {
        const res = await imagesApi.get('images')
        console.log(res.data.results)
        ProxyState.apiBgs = res.data.results
    }

    async getAllApiWeather() {
        const res = await weatherApi.get('weather')
        ProxyState.apiBgs = res.data.results
    }
}

export const apiBgsService = new ApiBgsService()