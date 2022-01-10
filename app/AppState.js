import { Image } from "./Models/RImage.js"
import { Quote } from "./Models/RQuote.js"
import { Todos } from "./Models/Todos.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/').[]} */
  date = []

  quotes = null

  weather = null

  images = null

  todos = []

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
