import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuessPvpService } from './guess-pvp.service';
import { CreateGuessPvpDto } from './dto/create-guess-pvp.dto';
import { UpdateGuessPvpDto } from './dto/update-guess-pvp.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator.ts.decorator';
import { ValidRoles } from 'src/common/interface/valid-roles';

@Controller('guess-pvp')
@ApiTags('Adivina-PVP')
export class GuessPvpController {
  constructor(private readonly guessPvpService: GuessPvpService) {}

  @ApiOperation({summary:'Crear puntaje', description:'Crea el registro en la base de datos para almacenar el puntaje máximo, la máxima cantidad de señas adivinadas y las victorias del usuario. Este endpoint sólo se manda llamar cuando se crea un nuevo usuario'})
  @ApiResponse({status:201})
  @ApiBody({type: CreateGuessPvpDto})
  @Post()
  create(@Body() createGuessPvpDto: CreateGuessPvpDto) {
    return this.guessPvpService.create(createGuessPvpDto);
  }

  @ApiOperation({summary: 'Ranking del juego', description:'Se obtiene el ranking de los 10 usuarios con mayor número de victorias'})
  @ApiResponse({status:200, description:'Retorna los 10 registros más altos', example:[{
    "id": 1,
    "victorys": 0,
    "points": 0,
    "quantity": 0,
    "user": "usuario"
  },
  {
    "id": 2,
    "victorys": 0,
    "points": 0,
    "quantity": 0,
    "user": "usuario"
  },
  {
    "id": 3,
    "victorys": 0,
    "points": 0,
    "quantity": 0,
    "user": "usuario"
  },
  {
    "id": 4,
    "victorys": 0,
    "points": 0,
    "quantity": 0,
    "user": "usuario"
  },
  {
    "id": 5,
    "victorys": 0,
    "points": 0,
    "quantity": 0,
    "user": "usuario"
  },
  {
    "id": 6,
    "victorys": 0,
    "points": 0,
    "quantity": 0,
    "user": "usuario"
  },
  {
    "id": 7,
    "victorys": 0,
    "points": 0,
    "quantity": 0,
    "user": "usuario"
  },
  {
    "id": 8,
    "victorys": 0,
    "points": 0,
    "quantity": 0,
    "user": "usuario"
  },
  {
    "id": 9,
    "victorys": 0,
    "points": 0,
    "quantity": 0,
    "user": "usuario"
  },
  {
    "id": 10,
    "victorys": 0,
    "points": 0,
    "quantity": 0,
    "user": "usuario"
  }]})
  @ApiBearerAuth()
  @Auth(ValidRoles.user)
  @Get('ranking')
  findAll() {
    return this.guessPvpService.findTopTen();
  }

  @ApiOperation({summary: 'Información del jugador', description:'Se obtiene la información del usuario registrada en este juego'})
  @ApiResponse({status:200, description:'Retorna la información del usuario', example:{
    "id": 2,
    "victorys": 0,
    "points": 0,
    "quantity": 0
  }})
  @ApiParam({name: 'id', description:'ID del usuario registrado que consulta su información', required: true, example:'84019b25-a0db-4520-8ffc-1de3a68d372f'})
  @ApiBearerAuth()
  @Auth(ValidRoles.user)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guessPvpService.findOne(id);
  }

  @ApiOperation({summary:'Actualizar información', description:'Actualiza los puntajes máximos del usuario registrado.'})
  @ApiResponse({status:200, description:'Retorna la información actualizada', example:{
    "id": 2,
    "victorys": 0,
    "points": 0,
    "quantity": 0
  }})
  @ApiBody({type: UpdateGuessPvpDto})
  @ApiBearerAuth()
  @Patch('update')
  @Auth(ValidRoles.user)
  update(@Body() updateGuessPvpDto: UpdateGuessPvpDto) {
    return this.guessPvpService.update( updateGuessPvpDto);
  }
}
