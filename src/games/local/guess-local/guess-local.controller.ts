import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GuessLocalService } from './guess-local.service';
import { CreateGuessLocalDto } from './dto/create-guess-local.dto';
import { UpdateGuessLocalDto } from './dto/update-guess-local.dto';
import { ValidRoles } from 'src/common/interface/valid-roles';
import { Auth } from 'src/common/decorators/auth.decorator.ts.decorator';
import { PaginationDto } from 'src/common/dto/pagination.dto';
@Controller('guess-local')
export class GuessLocalController {
  constructor(private readonly guessLocalService: GuessLocalService) {}

  @Post()
  create(@Body() createGuessLocalDto: CreateGuessLocalDto) {
    return this.guessLocalService.create(createGuessLocalDto);
  }

  @Get(':id')
  @Auth(ValidRoles.user)
  findOne(@Param('id') id: string) {
    return this.guessLocalService.findOne(id);
  }

  @Patch('update')
  @Auth(ValidRoles.user)
  update(@Body() updateGuessLocalDto: UpdateGuessLocalDto) {
    return this.guessLocalService.update(updateGuessLocalDto);
  }
}
