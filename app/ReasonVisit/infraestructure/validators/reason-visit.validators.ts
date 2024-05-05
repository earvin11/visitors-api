import vine from "@vinejs/vine";

export const createReasonVisitValidator = vine.compile(
    vine.object({
        visitorId: vine.string(),
        reason: vine.string()
    })
)