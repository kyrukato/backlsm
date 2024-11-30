import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @ApiOperation({summary:'Poblar BD', description:'Endpoint que permite poblar la base de datos con todas las señas disponibles. Solo se ejecuta una vez.'})
  @ApiResponse({status:201, description:'Retorna un mensaje de éxito', example:'SEED EXECUTED'})
  @Get()
  executeSeed(){
    return this.seedService.runSeed();
  }
}
