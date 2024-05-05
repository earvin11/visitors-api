import { generateCharRandom } from "../../../Shared/helpers/generate-char.helper.js";
import { UserEntity } from "../../domain/user.entity.js";
import { UserRepository } from "../../domain/user.repository.js";
import User from "../models/user.js";

export class UserPgRepository implements UserRepository {
    public create = async(user: UserEntity): Promise<UserEntity> => {
        return await new User().fill(user).save();
    }
    public findAll = async(): Promise<[] | UserEntity[]> => {
        return await User
            .query()
            .where({ isActive: true })
            .preload('role');
    }
    public findById = async(id: string): Promise<UserEntity | null> => {
        const user = await User.findOrFail(id);
        await user.load((loader) => {
            loader
                .load('role')
        });
        return user;
    }
    public update = async(id: string, dataToUpdate: Partial<UserEntity>): Promise<UserEntity | null> => {
        const user = await User.findOrFail(id);
        return await user.merge(dataToUpdate).save();
    }
    public remove = async(id: string): Promise<UserEntity | null> => {
        const user = await User.findOrFail(id);
        return await user.merge({ isActive: false }).save();
    }
    public login = async(email: string, password: string): Promise<UserEntity | null> => {
        const user = await User.findByOrFail({ email });
        if(user.password !== password) return null;
        return user;

    }
    public resetPassword = async(email: string, newPassword: string): Promise<UserEntity> => {
        const user = await User.findByOrFail({ email });
        return await user.merge({ password: newPassword }).save();
    }
}