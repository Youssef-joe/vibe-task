import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IdeasService } from './ideas.service';
import { IdeasController } from './ideas.controller';
import { WebsiteIdea, WebsiteIdeaSchema } from './schemas/website-idea.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WebsiteIdea.name, schema: WebsiteIdeaSchema }]),
  ],
  controllers: [IdeasController],
  providers: [IdeasService],
})
export class IdeasModule {}
