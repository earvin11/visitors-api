import router from "@adonisjs/core/services/router"
import { UserController } from "./user.controller.js"

export default () => {
    router.post('/', [UserController, 'store'])
    router.get('/', [UserController, 'index'])
}