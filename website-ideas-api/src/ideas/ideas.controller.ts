import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { IdeasService } from './ideas.service';

@Controller('ideas')
export class IdeasController {
  constructor(private readonly ideasService: IdeasService) {}

  @Post()
  async create(@Body('prompt') prompt: string) {
    const idea = await this.ideasService.create(prompt);
    return idea;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const idea = await this.ideasService.findOne(id);
    if (!idea) throw new NotFoundException('Idea not found');
    return idea;
  }
}
