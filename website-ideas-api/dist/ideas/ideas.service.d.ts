import { Model } from 'mongoose';
import { WebsiteIdea, WebsiteIdeaDocument } from './schemas/website-idea.schema';
export declare class IdeasService {
    private websiteIdeaModel;
    constructor(websiteIdeaModel: Model<WebsiteIdeaDocument>);
    create(prompt: string): Promise<WebsiteIdea>;
    findOne(id: string): Promise<WebsiteIdea | null>;
}
