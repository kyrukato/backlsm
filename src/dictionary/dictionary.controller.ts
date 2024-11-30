import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { CreateDictionaryDto } from './dto/create-dictionary.dto';
import { UpdateDictionaryDto } from './dto/update-dictionary.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('dictionary')
@ApiTags('Diccionario')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Post()
  @ApiOperation({summary: 'Crear una seña'})
  @ApiResponse({status: 201, description:'Utilizado solamente por el SEED para cargar en la BD la información de las señas que se utilizarán en el sistema'})
  @ApiBody({type: CreateDictionaryDto})
  create(@Body() createDictionaryDto: CreateDictionaryDto) {
    return this.dictionaryService.create(createDictionaryDto);
  }

  @Get(':cat')
  @ApiOperation({summary: 'Obtener seña'})
  @ApiResponse({status: 200, description:'Retorna un arreglo con todas las señas pertenecientes a la categoría seleccionada por el usuario', isArray: true,})
  @ApiParam({name: 'cat', description: 'Nombre de la categoría seleccionada por el usuario', required: true, example: 'Abecedario'})
  findOne(@Param('cat') cat: string) {
    return this.dictionaryService.findOne(cat);
  }
}
