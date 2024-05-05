import { inject } from "@adonisjs/core";
import { VisitorEntity } from "../domain/visitor.entity.js";
import { Visitor } from "../domain/visitor.value.js";
import { VisitoPgRepository } from "../infraestructure/repositories/visitor.pg-repository.js";

@inject()
export class VisitorUseCases {
    constructor(private readonly visitorRepository: VisitoPgRepository) {}

    public create = async(visitor: VisitorEntity) => {
        // valida si ya existe un visitando con esa identificacion
        const visitorExists =  await this.findByDocument(visitor.serialDocument);
        if(visitorExists) return visitorExists;

        // sino existe crealo
        const newVisitor = new Visitor(visitor);
        return await this.visitorRepository.create(newVisitor);
    };
    public findAll = async() => {
        return await this.visitorRepository.findAll();
    };
    public findById = async(id: string) => {
        return await this.visitorRepository.findById(id);
    };
    public findByDocument = async(serialDocument: string) => {
        return await this.visitorRepository.findByDocument(serialDocument);
    }
    public update = async(id: string, dataToUpdate: Partial<VisitorEntity>) => {
        return await this.visitorRepository.update(id, dataToUpdate);
    };
    public remove = async(id: string) => {
        return await this.visitorRepository.remove(id);
    };
};