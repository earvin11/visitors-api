import { RoleEntity } from "./role.entity.js";

export interface RoleRepository {
    create(role: RoleEntity): Promise<RoleEntity>;
    findAll(): Promise<RoleEntity[] | []>;
    findById(id: string): Promise<RoleEntity | null>;
    update(id: string, dataToUpdate: Partial<RoleEntity>): Promise<RoleEntity | null>;
    remove(id: string): Promise<RoleEntity | null>;
};