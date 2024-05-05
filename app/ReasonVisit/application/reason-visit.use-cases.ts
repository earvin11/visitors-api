import { inject } from "@adonisjs/core";
import { ReasonVisitEntity } from "../domain/reason-visit.entity.js";
import { ReasonVisit } from "../domain/reason-visit.value.js";
import { ReasonVisitPgRepository } from "../infraestructure/repositories/reason-visit.pg-repository.js";

@inject()
export class ReasonVisitUseCases {
    constructor(private readonly reasonVisitRepository: ReasonVisitPgRepository) {}

    public create = async(reason: ReasonVisitEntity) => {
        const newReason = new ReasonVisit(reason);
        return await this.reasonVisitRepository.create(newReason);
    };
    public findAll = async() => {
        return await this.reasonVisitRepository.findAll();
    };
    // public findById = async(id: string) => {
    //     return await this.reasonVisitRepository.findById(id);
    // };
    // public update = async(id: string, dataToUpdate: Partial<ReasonVisitEntity>) => {
    //     return await this.reasonVisitRepository.update(id, dataToUpdate);
    // };
    // public remove = async(id: string) => {
    //     return await this.reasonVisitRepository.remove(id);
    // }; 
}