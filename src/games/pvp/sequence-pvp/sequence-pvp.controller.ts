import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SequencePvpService } from './sequence-pvp.service';
import { CreateSequencePvpDto } from './dto/create-sequence-pvp.dto';
import { UpdateSequencePvpDto } from './dto/update-sequence-pvp.dto';

@Controller('sequence-pvp')
export class SequencePvpController {
  constructor(private readonly sequencePvpService: SequencePvpService) {}

  @Post()
  create(@Body() createSequencePvpDto: CreateSequencePvpDto) {
    return this.sequencePvpService.create(createSequencePvpDto);
  }

  @Get()
  findAll() {
    return this.sequencePvpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sequencePvpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSequencePvpDto: UpdateSequencePvpDto) {
    return this.sequencePvpService.update(+id, updateSequencePvpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sequencePvpService.remove(+id);
  }
}
