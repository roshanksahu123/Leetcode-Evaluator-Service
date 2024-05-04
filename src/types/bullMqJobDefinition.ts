import { Job } from "bullmq";

export interface IJob {
    name: string,
    payload? : Record<string, unknown>, //? means optional
    handle: (job?: Job) => void
    failed: (job?: Job) => void
}