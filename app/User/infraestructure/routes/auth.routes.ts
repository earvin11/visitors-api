import router from "@adonisjs/core/services/router"
import { userController } from "../dependencies.js"

export default () => {
    router.post('/register', userController.store)
    router.post('/login', userController.login)
    router.patch('/:email/reset-password', userController.resetPassword) 
}