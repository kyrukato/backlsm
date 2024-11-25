import { Injectable } from '@nestjs/common';
import { DictionaryService } from 'src/dictionary/dictionary.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  
  constructor(
    private readonly dictionaryService:DictionaryService,
  ){}

  async runSeed(){
    this.insertSignals();
    return 'SEED EXECUTED';
  }

  private async insertSignals(){
    await this.dictionaryService.deleteAll();
    const dictionarySignals = initialData.dictionary;
    const insertPromises = [];
    dictionarySignals.forEach(signal =>{
      insertPromises.push(this.dictionaryService.create(signal));
    });
    await Promise.all(insertPromises);
    return true;
  }

}
