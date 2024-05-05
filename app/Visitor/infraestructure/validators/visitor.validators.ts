import vine from "@vinejs/vine";

export const createVisitorValidator = vine.compile(
    vine.object({
        serialDocument: vine.string(),
        name: vine.string(),
        lastName: vine.string()
    })
)