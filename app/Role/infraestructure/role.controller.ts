import { inject } from "@adonisjs/core";
import { RoleUseCases } from "../application/role.use-cases.js";
import { HttpContext } from "@adonisjs/core/http";
import { createRoleValidator } from "./validators/role.validators.js";

@inject()
export class RoleController {
    constructor(private readonly roleUseCases: RoleUseCases) {};

    public store = async(ctx: HttpContext) => {
        const dataRole = await ctx.request.validateUsing(createRoleValidator);
        const newRole = await this.roleUseCases.create(dataRole);
        ctx.response.created(newRole);
    };
    public index = async({}: HttpContext) => {
        return await this.roleUseCases.findAll();
    };
    public show = async({ request }: HttpContext) => {
        const { id } = request.params();
        return await this.roleUseCases.findById(id);
    };
    public update = async({ request }: HttpContext) => {
        return await this.roleUseCases.update(request.params().id, request.body());
    };
    public remove = async({ request }: HttpContext) => {
        return await this.roleUseCases.remove(request.params().id);
    };
};