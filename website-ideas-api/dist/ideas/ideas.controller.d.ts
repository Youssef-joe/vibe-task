import { IdeasService } from './ideas.service';
export declare class IdeasController {
    private readonly ideasService;
    constructor(ideasService: IdeasService);
    create(prompt: string): Promise<import("./schemas/website-idea.schema").WebsiteIdea>;
    findOne(id: string): Promise<import("./schemas/website-idea.schema").WebsiteIdea>;
}
