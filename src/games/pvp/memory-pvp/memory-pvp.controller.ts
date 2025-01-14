import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemoryPvpService } from './memory-pvp.service';
import { CreateMemoryPvpDto } from './dto/create-memory-pvp.dto';
import { UpdateMemoryPvpDto } from './dto/update-memory-pvp.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator.ts.decorator';
import { ValidRoles } from 'src/common/interface/valid-roles';

@Controller('memory-pvp')
@ApiTags('Memoria-PVP')
export class MemoryPvpController {
  constructor(private readonly memoryPvpService: MemoryPvpService) {}

  @ApiOperation({summary:'Crear puntajes de usuario', description:'Crea el registro para almacenar los puntajes máximos del usuario.Este endpoint sólo es utilizado cuando un nuevo usuario es creado.'})
  @ApiResponse({status:201,})
  @ApiBody({type: CreateMemoryPvpDto})
  @Post()
  create(@Body() createMemoryPvpDto: CreateMemoryPvpDto) {
    return this.memoryPvpService.create(createMemoryPvpDto);
  }

  @ApiOperation({summary:'Obtener Ranking', description:'Obtiene a los 10 usuarios con mejor puntaje en el juego, sólo los usuarios registrados pueden entrar a este endpoint'})
  @ApiResponse({status:200, description:'Arreglo de 10 usuarios', isArray: true, example:[
    {
      "id": 1,
      "victorys": 0,
      "user": "usuario"
    },
    {
      "id": 2,
      "victorys": 0,
      "user": "usuario"
    },
    {
      "id": 3,
      "victorys": 0,
      "user": "usuario"
    },
    {
      "id": 4,
      "victorys": 0,
      "user": "usuario"
    },
    {
      "id": 5,
      "victorys": 0,
      "user": "usuario"
    },
    {
      "id": 6,
      "victorys": 0,
      "user": "usuario"
    },
    {
      "id": 7,
      "victorys": 0,
      "user": "usuario"
    },
    {
      "id": 8,
      "victorys": 0,
      "user": "usuario"
    },
    {
      "id": 9,
      "victorys": 0,
      "user": "usuario"
    },
    {
      "id": 10,
      "victorys": 0,
      "user": "usuario"
    },
  ]})
  @ApiBearerAuth()
  @Auth(ValidRoles.user)
  @Get('ranking')
  findAll() {
    return this.memoryPvpService.findTopTen();
  }

  @ApiOperation({summary:'Obtener información', description:'Obtiene la información del usuario sobre los puntajes obtenidos en el juego'})
  @ApiResponse({status:200, description:'Retorna la información del usuario', example:{
    "id": 2,
    "victorys": 0
  }})
  @ApiParam({name: 'id', description:'ID del usuario registrado en el sistema', type:'UUID', required: true, example:'2104d802-027f-4ec6-838a-e7b7be5d570f'})
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memoryPvpService.findOne(id);
  }

  @ApiOperation({summary:'Actualizar información', description:'Actualiza los puntajes máximos del usuario registrado'})
  @ApiResponse({status:200, description:'Retorna la información actualizada del usuario', example:{
    "id": 2,
    "victorys": 0
  }})
  @ApiBody({type:UpdateMemoryPvpDto})
  @ApiBearerAuth()
  @Patch('update')
  @Auth(ValidRoles.user)
  update(@Body() updateMemoryPvpDto: UpdateMemoryPvpDto) {
    return this.memoryPvpService.update(updateMemoryPvpDto);
  }
}
