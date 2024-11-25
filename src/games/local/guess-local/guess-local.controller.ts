import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuessLocalService } from './guess-local.service';
import { CreateGuessLocalDto } from './dto/create-guess-local.dto';
import { UpdateGuessLocalDto } from './dto/update-guess-local.dto';

@Controller('guess-local')
export class GuessLocalController {
  constructor(private readonly guessLocalService: GuessLocalService) {}

  @Post()
  create(@Body() createGuessLocalDto: CreateGuessLocalDto) {
    return this.guessLocalService.create(createGuessLocalDto);
  }

  @Get()
  findAll() {
    return this.guessLocalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guessLocalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuessLocalDto: UpdateGuessLocalDto) {
    return this.guessLocalService.update(+id, updateGuessLocalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guessLocalService.remove(+id);
  }
}
