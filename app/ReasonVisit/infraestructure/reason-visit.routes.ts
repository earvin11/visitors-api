import router from "@adonisjs/core/services/router"
import { ReasonVisitController } from "./reason-visit.controller.js"

export default () => {
    router.post('/', [ReasonVisitController, 'store'])
    router.get('/', [ReasonVisitController, 'index'])
}