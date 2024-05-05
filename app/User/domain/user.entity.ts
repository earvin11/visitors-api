export interface UserEntity {
    id?: string;
    fullName: string;
    email: string;
    password: string;
    roleId: string;
    isActive?: boolean;
    accesToken?: string;
};