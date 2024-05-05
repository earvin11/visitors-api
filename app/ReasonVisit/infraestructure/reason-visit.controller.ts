import { inject } from "@adonisjs/core";
import { ReasonVisitUseCases } from "../application/reason-visit.use-cases.js";
import { HttpContext } from "@adonisjs/core/http";
import { createReasonVisitValidator } from "./validators/reason-visit.validators.js";

@inject()
export class ReasonVisitController {
    constructor(private readonly reasonVisitUseCases: ReasonVisitUseCases) {}

    public store = async(ctx: HttpContext) => {
        const data = await ctx.request.validateUsing(createReasonVisitValidator);
        const reason = await this.reasonVisitUseCases.create(data);
        ctx.response.created(reason);
    }
    public index = async() => {
        return await this.reasonVisitUseCases.findAll();
    }
}