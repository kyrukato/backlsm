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

  @Get()
  findAll() {
    return this.memoryLocalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memoryLocalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemoryLocalDto: UpdateMemoryLocalDto) {
    return this.memoryLocalService.update(+id, updateMemoryLocalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memoryLocalService.remove(+id);
  }
}
