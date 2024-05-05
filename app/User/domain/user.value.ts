import { UserEntity } from "./user.entity.js";

export class User implements UserEntity {
    public id?: string;
    public fullName: string;
    public email: string;
    public password: string;
    public roleId: string;
    public isActive: boolean;

    constructor(user: UserEntity) {
        this.fullName = user.fullName;
        this.email = user.email;
        this.password = user.password;
        this.roleId= user.roleId;
        this.isActive = true;
    }
}