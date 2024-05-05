import { RoleEntity } from "./role.entity.js";

export class Role implements RoleEntity {
    public id?: string;
    public name: string;
    public isActive: boolean;

    constructor(role: RoleEntity) {
        this.isActive = true;
        this.name = role.name;
    }
}