import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
import { VisitorUseCases } from "../application/visitor.use-cases.js";
import { createVisitorValidator } from "./validators/visitor.validators.js";

@inject()
export class VisitorController {
    constructor(private readonly visitorUseCases: VisitorUseCases) {}

    public store = async(ctx: HttpContext) => {
        const dataVisitor = await ctx.request.validateUsing(createVisitorValidator);
        const visitor = await this.visitorUseCases.create(dataVisitor);
        ctx.response.created(visitor);
    };
    public index = async(ctx: HttpContext) => {
        const data = await this.visitorUseCases.findAll();
        ctx.response.ok(data);
    }
}