import { inject } from "@adonisjs/core";
import { UserEntity } from "../domain/user.entity.js";
import { User } from "../domain/user.value.js";
import { UserPgRepository } from "../infraestructure/repositories/user.pg-repository.js";

@inject()
export class UserUseCases {
    constructor(private userRepository: UserPgRepository) {};

    public create = async(user: UserEntity) => {
        const newUser = new User(user);
        return await this.userRepository.create(newUser);
    };
    public findAll = async() => {
        return await this.userRepository.findAll();
    };
    public resetPassword = async(id: string) => {
        return await this.userRepository.resetPassword(id);
    }
};