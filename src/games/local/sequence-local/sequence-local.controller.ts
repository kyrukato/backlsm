import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SequenceLocalService } from './sequence-local.service';
import { CreateSequenceLocalDto } from './dto/create-sequence-local.dto';
import { UpdateSequenceLocalDto } from './dto/update-sequence-local.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('sequence-local')
@ApiTags('Secuencia-Local')
export class SequenceLocalController {
  constructor(private readonly sequenceLocalService: SequenceLocalService) {}

  @ApiOperation({summary:'Crear puntaje', description:'Crea el registro en la base de datos para almacenar el puntaje máximo y la cantidad máxima de señas en secuencia obtenidas por el usuario, este endpoint solo se manda llamar al momento de la creación del usuario'})
  @ApiResponse({status:201})
  @ApiBody({type:CreateSequenceLocalDto})
  @Post()
  create(@Body() createSequenceLocalDto: CreateSequenceLocalDto) {
    return this.sequenceLocalService.create(createSequenceLocalDto);
  }

  @ApiOperation({summary:'Obtener información', description:'Obtiene el puntaje máximo alcanzado y la secuencia máxima registrada por el usuario en una partida'})
  @ApiResponse({status: 200, description: 'Retorna la información del usuario en este juego', example:{
    "id": 3,
    "sequenceRemembered": 0,
    "points": 0
  }})
  @ApiParam({name: 'id', description:'ID del usuario que solicita su información', required: true, example:'84019b25-a0db-4520-8ffc-1de3a68d372f'})
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sequenceLocalService.findOne(id);
  }

  @Get('level/:id')
  findLevel(@Param('id') id:string){
    return this.sequenceLocalService.findLevels(id);
  }

  @ApiOperation({summary: 'Actualizar información', description:'Actualiza el puntaje máximo alcanzado y/o la secuencia máxima registrada por el usuario durante una partida'})
  @ApiResponse({status: 200, description:'Retorna la información actualizada', example:{
    "id": 3,
    "sequenceRemembered": 0,
    "points": 0
  }})
  @ApiBody({type:UpdateSequenceLocalDto})
  @ApiBearerAuth()
  @Patch('update')
  update(@Body() updateSequenceLocalDto: UpdateSequenceLocalDto) {
    return this.sequenceLocalService.update( updateSequenceLocalDto);
  }

}
