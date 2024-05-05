import { inject } from "@adonisjs/core";
import { RoleEntity } from "../domain/role.entity.js";
import { Role } from "../domain/role.value.js";
import { RolePgRepository } from "../infraestructure/repositories/role.pg-repository.js";

@inject()
export class RoleUseCases {
    constructor(private readonly roleRepository: RolePgRepository) {};

    public create = async(role: RoleEntity) => {
        const newRole = new Role(role);
        return await this.roleRepository.create(newRole);
    };
    public findAll = async() => {
        return await this.roleRepository.findAll();
    };
    public findById = async(id: string) => {
        return await this.roleRepository.findById(id);
    };
    public update = async(id: string, dataToUpdate: Partial<RoleEntity>) => {
        return await this.roleRepository.update(id, dataToUpdate);
    };
    public remove = async(id: string) => {
        return await this.roleRepository.remove(id);
    };
};