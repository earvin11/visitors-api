import { VisitorEntity } from "./visitor.entity.js";

export class Visitor implements VisitorEntity {
    public serialDocument: string;
    public name: string;
    public lastName: string;

    constructor(visitor: VisitorEntity) {
        this.lastName = visitor.lastName;
        this.name = visitor.name;
        this.serialDocument = visitor.serialDocument;
    };
};