import router from "@adonisjs/core/services/router"
import { RoleController } from "./role.controller.js"

export default () => {
    router.post('/', [RoleController, 'store'])
    router.get('/', [RoleController, 'index'])
}