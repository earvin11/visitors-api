import { UserEntity } from "../../User/domain/user.entity.js";

export interface ResetPasswordEventResponse {
    user: UserEntity,
    newPassword: string
}