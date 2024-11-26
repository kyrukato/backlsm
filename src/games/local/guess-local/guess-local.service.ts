import { Injectable } from '@nestjs/common';
import { CreateGuessLocalDto } from './dto/create-guess-local.dto';
import { UpdateGuessLocalDto } from './dto/update-guess-local.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GuessLocal } from './entities/guess-local.entity';

@Injectable()
export class GuessLocalService {

  constructor(
    @InjectRepository(GuessLocal)
    private readonly guessLocalRepository: Repository<GuessLocal>
  ){}

  async create(createGuessLocalDto: CreateGuessLocalDto) {
    this.guessLocalRepository.save(createGuessLocalDto);
  }

  findAll() {
    return `This action returns all guessLocal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} guessLocal`;
  }

  update(id: number, updateGuessLocalDto: UpdateGuessLocalDto) {
    return `This action updates a #${id} guessLocal`;
  }

  remove(id: number) {
    return `This action removes a #${id} guessLocal`;
  }
}
