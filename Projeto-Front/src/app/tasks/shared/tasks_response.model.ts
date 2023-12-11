import { Task } from "./task.model";


/**
 * Object model TaskResponse to use in project
 */
export class TaskResponse {
    constructor(
        public statusCode: number,
        public body: Task[]
    ) {}
}
