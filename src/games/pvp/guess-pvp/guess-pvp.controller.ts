import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuessPvpService } from './guess-pvp.service';
import { CreateGuessPvpDto } from './dto/create-guess-pvp.dto';
import { UpdateGuessPvpDto } from './dto/update-guess-pvp.dto';

@Controller('guess-pvp')
export class GuessPvpController {
  constructor(private readonly guessPvpService: GuessPvpService) {}

  @Post()
  create(@Body() createGuessPvpDto: CreateGuessPvpDto) {
    return this.guessPvpService.create(createGuessPvpDto);
  }

  @Get()
  findAll() {
    return this.guessPvpService.findTopTen();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guessPvpService.findOne(id);
  }

  @Patch('update')
  update(@Body() updateGuessPvpDto: UpdateGuessPvpDto) {
    return this.guessPvpService.update( updateGuessPvpDto);
  }

  @Delete('')
  remove(@Param('id') id: string) {
    return this.guessPvpService.remove(+id);
  }
}
