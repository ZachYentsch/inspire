import { ApiBgController } from "./Controllers/ApiBgsController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { loadState } from "./Utils/LocalStorage.js";


class App {
  apiBgsController = new ApiBgController()
}

loadState()

window["app"] = new App();
