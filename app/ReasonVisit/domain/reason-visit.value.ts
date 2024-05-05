import { ReasonVisitEntity } from "./reason-visit.entity.js";

export class ReasonVisit implements ReasonVisitEntity {
    public visitorId: string;
    public reason: string;

    constructor(reason: ReasonVisit) {
        this.reason = reason.reason;
        this.visitorId = reason.visitorId
    };
};