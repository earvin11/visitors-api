import { UserEntity } from "../app/User/domain/user.entity.js";

interface ResetPasswordResponse {
  user: UserEntity,
  newPassword: string
}

declare module '@adonisjs/core/types' {
  interface EventsList {
    'user:registered': UserEntity,
    'user:reset:password': ResetPasswordResponse
  }
}