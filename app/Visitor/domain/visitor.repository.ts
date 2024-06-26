import { VisitorEntity } from "./visitor.entity.js";

export interface VisitorRepository {
    create(visitor: VisitorEntity): Promise<VisitorEntity>;
    findAll(): Promise<VisitorEntity[] | []>;
    findById(id: string): Promise<VisitorEntity>;
    findByDocument(serialDocument: string): Promise<VisitorEntity | null>;
    update(id: string, dataToUpdate: Partial<VisitorEntity>): Promise<VisitorEntity>;
    remove(id: string): Promise<VisitorEntity>;
};