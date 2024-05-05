import { inject } from "@adonisjs/core";
import { UserEntity } from "../domain/user.entity.js";
import { User } from "../domain/user.value.js";
import { UserPgRepository } from "../infraestructure/repositories/user.pg-repository.js";
import { generateCharRandom } from "../../Shared/helpers/generate-char.helper.js";

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
    public resetPassword = async(email: string) => {
        const newPassword = generateCharRandom(6);
        const user = await this.userRepository.resetPassword(email, newPassword);
        return {
            user,
            newPassword
        };
    };
    public login = async(email: string, password: string) => {
        return await this.userRepository.login(email, password);
    };
};