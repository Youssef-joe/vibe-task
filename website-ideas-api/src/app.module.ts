import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IdeasModule } from './ideas/ideas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/website-ideas'),
    IdeasModule,
  ],
})
export class AppModule {}
