import { ReasonVisitEntity } from "./reason-visit.entity.js";

export interface ReasonVisitRepository {
    create(reason: ReasonVisitEntity): Promise<ReasonVisitEntity>;
    findAll(): Promise<ReasonVisitEntity[] | []>;
};