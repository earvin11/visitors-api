import router from "@adonisjs/core/services/router"
import { VisitorController } from "./visitor.controller.js"

export default () => {
    router.post('/', [VisitorController, 'store'])
    router.get('/', [VisitorController, 'index'])
}