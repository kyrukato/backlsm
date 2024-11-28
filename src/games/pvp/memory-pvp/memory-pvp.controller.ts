import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemoryPvpService } from './memory-pvp.service';
import { CreateMemoryPvpDto } from './dto/create-memory-pvp.dto';
import { UpdateMemoryPvpDto } from './dto/update-memory-pvp.dto';

@Controller('memory-pvp')
export class MemoryPvpController {
  constructor(private readonly memoryPvpService: MemoryPvpService) {}

  @Post()
  create(@Body() createMemoryPvpDto: CreateMemoryPvpDto) {
    return this.memoryPvpService.create(createMemoryPvpDto);
  }

  @Get()
  findAll() {
    return this.memoryPvpService.findTopTen();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memoryPvpService.findOne(id);
  }

  @Patch('update')
  update(@Body() updateMemoryPvpDto: UpdateMemoryPvpDto) {
    return this.memoryPvpService.update(updateMemoryPvpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memoryPvpService.remove(+id);
  }
}
