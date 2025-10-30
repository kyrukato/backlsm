import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemoryLocalService } from './memory-local.service';
import { CreateMemoryLocalDto } from './dto/create-memory-local.dto';
import { UpdateMemoryLocalDto } from './dto/update-memory-local.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('memory-local')
@ApiTags('Memoria-Local')
export class MemoryLocalController {
  constructor(private readonly memoryLocalService: MemoryLocalService) {}

  @ApiOperation({summary: 'Crea el puntaje del usuario', description:'Crea el registro del usuario para almacenar el puntaje máximo alcanzado en una partida, este endpoint solo se llama al momento de crear el usuario'})
  @ApiResponse({status:201})
  @ApiBody({type:CreateMemoryLocalDto})
  @Post()
  create(@Body() createMemoryLocalDto: CreateMemoryLocalDto) {
    return this.memoryLocalService.create(createMemoryLocalDto);
  }

  @ApiOperation({summary: 'Obtiene puntaje del usuario', description:'Se obtiene el puntaje máximo alcanzado por el usuario registrado durante una partida'})
  @ApiResponse({status:200, description:'Retorna puntaje', example:{
    "id": 4,
    "points": 0
  }})
  @ApiParam({name:'id', required: true})
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memoryLocalService.findOne(id);
  }

  @Get('level/:id')
  findLevel(@Param('id') id:string){
    return this.memoryLocalService.findLevels(id);
  }

  @ApiOperation({summary: 'Actualiza el puntaje del usuario', description:'Actualiza el puntaje del usuario después de terminar el juego'})
  @ApiResponse({status: 200, description:'Retorna puntaje actualizado', example:{
  "id": 4,
  "points": 100
  }})
  @ApiBearerAuth()
  @ApiBody({type: UpdateMemoryLocalDto})
  @Patch('update')
  update(@Body() updateMemoryLocalDto: UpdateMemoryLocalDto) {
    return this.memoryLocalService.update(updateMemoryLocalDto);
  }

}
