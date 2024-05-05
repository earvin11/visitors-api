import vine from "@vinejs/vine";

export const createUserValidator = vine.compile(
    vine.object({
        fullName: vine.string().trim().minLength(6),
        password: vine.string(),
        roleId: vine.string(),
        email: vine.string()
    })
)

export const loginValidator = vine.compile(
    vine.object({
        email: vine.string(),
        password: vine.string()
    })
)