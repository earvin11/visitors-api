import { ResetPasswordEventResponse } from "../app/Shared/interfaces/events.inerfaces.js";
import { UserEntity } from "../app/User/domain/user.entity.js";

declare module '@adonisjs/core/types' {
  interface EventsList {
    'user:registered': UserEntity,
    'user:reset:password': ResetPasswordEventResponse
  }
}