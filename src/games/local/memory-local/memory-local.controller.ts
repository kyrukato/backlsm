import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemoryLocalService } from './memory-local.service';
import { CreateMemoryLocalDto } from './dto/create-memory-local.dto';
import { UpdateMemoryLocalDto } from './dto/update-memory-local.dto';

@Controller('memory-local')
export class MemoryLocalController {
  constructor(private readonly memoryLocalService: MemoryLocalService) {}

  @Post()
  create(@Body() createMemoryLocalDto: CreateMemoryLocalDto) {
    return this.memoryLocalService.create(createMemoryLocalDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memoryLocalService.findOne(id);
  }

  @Patch('update')
  update(@Body() updateMemoryLocalDto: UpdateMemoryLocalDto) {
    return this.memoryLocalService.update(updateMemoryLocalDto);
  }

}
