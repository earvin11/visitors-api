import { UserEntity } from "./user.entity.js";

export interface UserRepository {
    create(user: UserEntity): Promise<UserEntity>;
    findAll(): Promise<UserEntity[] | []>;
    findById(id: string): Promise<UserEntity | null>;
    update(id: string, dataToUpdate: Partial<UserEntity>): Promise<UserEntity | null>;
    remove(id: string): Promise<UserEntity | null>;

    //auth actions
    resetPassword(id: string): Promise<UserEntity>;
};