import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateDictionaryDto } from './dto/create-dictionary.dto';
import { UpdateDictionaryDto } from './dto/update-dictionary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dictionary } from './entities/dictionary.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DictionaryService {

  constructor(
    @InjectRepository(Dictionary)
    private readonly dictionaryRepository: Repository<Dictionary>,
  ){}

  async create(createDictionaryDto: CreateDictionaryDto) {
    try {
      const dictionary = createDictionaryDto;
      await this.dictionaryRepository.save(dictionary)
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findOne(cat: string) {
      const products = await this.dictionaryRepository.find({
        where: {
          class: cat,
        }
      });
      return products;
  }

  async findSignal(id:number){
    const products = await this.dictionaryRepository.find({
      where: {
        id: id,
      }
    });
    return products;
  }


  async deleteAll(){
    const query = this.dictionaryRepository.createQueryBuilder('dictionary');
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error)
    throw new InternalServerErrorException('Unexpected error, check server errors')
  }

}
