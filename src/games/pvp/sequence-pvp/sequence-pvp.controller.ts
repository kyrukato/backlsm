import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SequencePvpService } from './sequence-pvp.service';
import { CreateSequencePvpDto } from './dto/create-sequence-pvp.dto';
import { UpdateSequencePvpDto } from './dto/update-sequence-pvp.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator.ts.decorator';
import { ValidRoles } from 'src/common/interface/valid-roles';

@Controller('sequence-pvp')
export class SequencePvpController {
  constructor(private readonly sequencePvpService: SequencePvpService) {}

  @ApiOperation({summary:'Crear puntaje', description:'Crea el registo en la base de datos para almacenar los puntajes del usuario registrado. Este endpoint solo se utiliza en el momento de crear un nuevo usuario.'})
  @ApiResponse({status:201})
  @ApiBody({type: CreateSequencePvpDto})
  @Post()
  create(@Body() createSequencePvpDto: CreateSequencePvpDto) {
    return this.sequencePvpService.create(createSequencePvpDto);
  }

  @ApiOperation({summary:'Obtener Ranking', description:'Obtiene a los 10 usuarios con mejor puntaje en el juego, sólo los usuarios registrados pueden entrar a este endpoint'})
  @ApiResponse({status:200, description:'Arreglo de 10 usuarios', isArray: true, example:[
    {
      "id": 1,
      "victorys": 0,
      "sequenceRemembered": 0,
      "points": 0,
      "user": "usuario"
    },
    {
      "id": 2,
      "victorys": 0,
      "sequenceRemembered": 0,
      "points": 0,
      "user": "usuario"
    },
    {
      "id": 3,
      "victorys": 0,
      "sequenceRemembered": 0,
      "points": 0,
      "user": "usuario"
    },
    {
      "id": 4,
      "victorys": 0,
      "sequenceRemembered": 0,
      "points": 0,
      "user": "usuario"
    },
    {
      "id": 5,
      "victorys": 0,
      "sequenceRemembered": 0,
      "points": 0,
      "user": "usuario"
    },
    {
      "id": 6,
      "victorys": 0,
      "sequenceRemembered": 0,
      "points": 0,
      "user": "usuario"
    },
    {
      "id": 7,
      "victorys": 0,
      "sequenceRemembered": 0,
      "points": 0,
      "user": "usuario"
    },
    {
      "id": 8,
      "victorys": 0,
      "sequenceRemembered": 0,
      "points": 0,
      "user": "usuario"
    },
    {
      "id": 9,
      "victorys": 0,
      "sequenceRemembered": 0,
      "points": 0,
      "user": "usuario"
    },
    {
      "id": 10,
      "victorys": 0,
      "sequenceRemembered": 0,
      "points": 0,
      "user": "usuario"
    }
  ]})
  @ApiBearerAuth()
  @Auth(ValidRoles.user)
  @Get('ranking')
  findAll() {
    return this.sequencePvpService.findTopTen();
  }

  @ApiOperation({summary:'Obtener información', description:'Obtiene los puntajes del usuario registrado'})
  @ApiResponse({status:200, description:'Retorna un JSON con los puntajes del usuario en este juego', example:{
    "id": 1,
    "victorys": 0,
    "sequenceRemembered": 0,
    "points": 0
  }})
  @ApiParam({name: 'id', type: 'UUID', description:'ID del usuario', required:true, example:'2104d802-027f-4ec6-838a-e7b7be5d570f'})
  @ApiBearerAuth()
  @Get(':id')
  @Auth(ValidRoles.user)
  findOne(@Param('id') id: string) {
    return this.sequencePvpService.findOne(id);
  }

  @ApiOperation({summary:'Actualizar información', description:'Actualiza los puntajes del usuario registrado'})
  @ApiResponse({status: 200, description: 'Retorna la información actualizada del usuario', example:{
    "id": 1,
    "victorys": 0,
    "sequenceRemembered": 0,
    "points": 0
  }})
  @ApiBody({type: UpdateSequencePvpDto})
  @ApiBearerAuth()
  @Auth(ValidRoles.user)
  @Patch('update')
  update(@Body() updateSequencePvpDto: UpdateSequencePvpDto) {
    return this.sequencePvpService.update(updateSequencePvpDto);
  }

}
