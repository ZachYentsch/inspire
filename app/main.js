import { ApiBgController } from "./Controllers/ApiBgsController.js";


class App {
  apiBgsController = new ApiBgController()
}

window["app"] = new App();
