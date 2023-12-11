/**
 * Object model Task to use in project
 */
export class Task {
    constructor(
        public id?: number,
        public description?: string,
        public status?: boolean,
        public datetime?: string,
    ) {}
}