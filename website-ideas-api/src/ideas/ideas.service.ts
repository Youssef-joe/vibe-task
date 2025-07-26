import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WebsiteIdea, WebsiteIdeaDocument } from './schemas/website-idea.schema';

@Injectable()
export class IdeasService {
  constructor(
    @InjectModel(WebsiteIdea.name) private websiteIdeaModel: Model<WebsiteIdeaDocument>,
  ) {}

  async create(prompt: string): Promise<WebsiteIdea> {
    const sections = ['Hero', 'About', 'Contact'];
    const createdIdea = new this.websiteIdeaModel({ prompt, sections });
    return createdIdea.save();
  }

  async findOne(id: string): Promise<WebsiteIdea | null> {
    return this.websiteIdeaModel.findById(id).exec();
  }
}
