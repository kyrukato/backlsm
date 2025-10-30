import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GuessLocalService } from './guess-local.service';
import { CreateGuessLocalDto } from './dto/create-guess-local.dto';
import { UpdateGuessLocalDto } from './dto/update-guess-local.dto';
import { ValidRoles } from 'src/common/interface/valid-roles';
import { Auth } from 'src/common/decorators/auth.decorator.ts.decorator';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
@Controller('guess-local')
@ApiTags('Adivina-Local')
export class GuessLocalController {
  constructor(private readonly guessLocalService: GuessLocalService) {}

  @Post()
  @ApiOperation({summary: 'Crea el puntaje del usuario', description:'Endpoint utilizado solamente en la creación del usuario para almacenar sus puntajes logrados en el juego'})
  @ApiResponse({status: 201, description:'Crea el registro del puntaje'})
  @ApiBody({type: CreateGuessLocalDto})
  create(@Body() createGuessLocalDto: CreateGuessLocalDto) {
    return this.guessLocalService.create(createGuessLocalDto);
  }

  @ApiOperation({summary: 'Obtener puntaje de usuario', description: 'El usuario puede obtener el puntaje máximo y la cantidad máxima de señas adivinadas en este juego'})
  @ApiResponse({status:200, description: 'Retorna la información del usuario en este juego', example:{"id": 6,
  "points": 0,
  "quantity": 0}})
  @ApiParam({name: 'id', description: 'ID del usuario registrado', required: true, example: '84019b25-a0db-4520-8ffc-1de3a68d372f'})
  @ApiBearerAuth()
  @Get(':id')
  @Auth(ValidRoles.user)
  findOne(@Param('id') id: string) {
    return this.guessLocalService.findOne(id);
  }
  
  @Get('/level/:id')
  findLevel(@Param('id') id: string){
    return this.guessLocalService.findLevels(id);
  }

  @ApiOperation({summary: 'Actualizar puntajes', description: 'Actualiza el puntaje máximo alcanzado por el usuario y/o la cantidad máxima de señas adivinadas por el usuario en una partida'})
  @ApiResponse({status: 200, description: 'Retorna la información actualizada', example:{"id": 6,
    "points": 0,
    "quantity": 0}})
  @ApiBody({type: UpdateGuessLocalDto})
  @ApiBearerAuth()
  @Patch('update')
  @Auth(ValidRoles.user)
  update(@Body() updateGuessLocalDto: UpdateGuessLocalDto) {
    return this.guessLocalService.update(updateGuessLocalDto);
  }
}
