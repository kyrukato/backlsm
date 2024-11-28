import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SequenceLocalService } from './sequence-local.service';
import { CreateSequenceLocalDto } from './dto/create-sequence-local.dto';
import { UpdateSequenceLocalDto } from './dto/update-sequence-local.dto';

@Controller('sequence-local')
export class SequenceLocalController {
  constructor(private readonly sequenceLocalService: SequenceLocalService) {}

  @Post()
  create(@Body() createSequenceLocalDto: CreateSequenceLocalDto) {
    return this.sequenceLocalService.create(createSequenceLocalDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sequenceLocalService.findOne(id);
  }

  @Patch('update')
  update(@Body() updateSequenceLocalDto: UpdateSequenceLocalDto) {
    return this.sequenceLocalService.update( updateSequenceLocalDto);
  }

}
