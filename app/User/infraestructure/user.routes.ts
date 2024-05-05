import router from "@adonisjs/core/services/router"
import { UserController } from "./user.controller.js"

export default () => {
    router.post('/', [UserController, 'store'])
    router.get('/', [UserController, 'index'])

    // auth module
    router.post('/login', [UserController, 'login'])
    router.patch('/:email/reset-password', [UserController, 'resetPassword']) 
}