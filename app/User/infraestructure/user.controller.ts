import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
import { UserUseCases } from "../application/user.use-cases.js";
import { createUserValidator } from "./validators/user.validators.js";
import emitter from "@adonisjs/core/services/emitter";

@inject()
export class UserController {
    constructor(private readonly userUseCases: UserUseCases) {};

    public store = async({ request, response }: HttpContext) => {
        const dataUser = await request.validateUsing(createUserValidator);
        const newUser = await this.userUseCases.create(dataUser);
        response.created(newUser);
        emitter.emit('user:registered', newUser);
    };
    public index = async() => {
        return await this.userUseCases.findAll()
    }
}