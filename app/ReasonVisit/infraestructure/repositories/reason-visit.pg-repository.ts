import { ReasonVisitEntity } from "../../domain/reason-visit.entity.js";
import { ReasonVisitRepository } from "../../domain/reason-visit.repository.js";
import ReasonVisit from "../models/reason_visit.js";

export class ReasonVisitPgRepository implements ReasonVisitRepository {
    public create = async(reason: ReasonVisitEntity): Promise<ReasonVisitEntity> => {
        return await new ReasonVisit().fill(reason).save()
    }
    public findAll = async(): Promise<[] | ReasonVisitEntity[]> => {
        throw new Error("Method not implemented.");
    }
}