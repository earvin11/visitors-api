import app from "@adonisjs/core/services/app";
import { UserController } from "./user.controller.js";

export const userController = await app.container.make(UserController);