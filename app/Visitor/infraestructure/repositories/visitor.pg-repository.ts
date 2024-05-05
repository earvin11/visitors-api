import { VisitorEntity } from "../../domain/visitor.entity.js";
import { VisitorRepository } from "../../domain/visitor.repository.js";
import Visitor from "../models/visitor.js";

export class VisitoPgRepository implements VisitorRepository {
    public create = async(visitor: VisitorEntity): Promise<VisitorEntity> => {
        return await new Visitor().fill(visitor).save();
    }
    public findAll = async(): Promise<[] | VisitorEntity[]> => {
        return await Visitor.query()
    }
    public findById = async(id: string): Promise<VisitorEntity> => {
        const visitor = await Visitor.findOrFail(id);
        // visitor.load((loader) => {
        //     loader
        //         .load('')
        // })
        return visitor;
    }
    public update = async(id: string, dataToUpdate: Partial<VisitorEntity>): Promise<VisitorEntity> => {
        throw new Error("Method not implemented.");
    }
    public remove = async(id: string): Promise<VisitorEntity> => {
        throw new Error("Method not implemented.");
    }
}