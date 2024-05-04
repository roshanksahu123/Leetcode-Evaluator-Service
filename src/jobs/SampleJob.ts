import {IJob} from "../types/bullMqJobDefinition";
import {Job} from "bullmq";

export default class SampleJob implements IJob {
    name: string;
    payload: Record<string, unknown>;

    constructor(payload: Record<string, unknown>) {
        this.payload = payload;
        this.name = this.constructor.name;
    }

    handle = () => {
        console.log("Handler of the job called");
    };

    failed = (job?: Job) => {
        console.log("Job Failed");
        if (job) {
            console.log(job.id);
        }
    };
}