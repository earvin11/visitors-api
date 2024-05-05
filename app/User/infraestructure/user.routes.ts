import router from "@adonisjs/core/services/router"
import { userController } from "./dependencies.js"

export default () => {
    router.get('/', userController.index)
}