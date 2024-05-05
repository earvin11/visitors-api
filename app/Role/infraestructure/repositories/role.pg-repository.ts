import { RoleEntity } from "../../domain/role.entity.js";
import { RoleRepository } from "../../domain/role.repository.js";
import Role from "../models/role.js";

export class RolePgRepository implements RoleRepository {
    public create = async(role: RoleEntity): Promise<RoleEntity> => {
        return await new Role().fill(role).save();
    }
    public findAll = async(): Promise<[] | RoleEntity[]> => {
        return await Role.query().preload('users');
    }
    public findById = async(id: string): Promise<RoleEntity | null> => {
        return await Role.findOrFail(id);
    }
    public update = async(id: string, dataToUpdate: Partial<RoleEntity>): Promise<RoleEntity | null> => {
        const role = await Role.findOrFail(id);
        return await role.merge(dataToUpdate).save();
    }
    public remove = async(id: string): Promise<RoleEntity | null> => {
        const role = await Role.findOrFail(id);
        return await role.merge({ isActive: false }).save();
    }
}