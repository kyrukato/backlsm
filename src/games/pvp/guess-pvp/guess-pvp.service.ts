import { Injectable } from '@nestjs/common';
import { CreateGuessPvpDto } from './dto/create-guess-pvp.dto';
import { UpdateGuessPvpDto } from './dto/update-guess-pvp.dto';
import { GuessPvp } from './entities/guess-pvp.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GuessPvpService {

  constructor(
    @InjectRepository(GuessPvp)
    private readonly guessPvpRepository: Repository<GuessPvp>
  ){}

  create(createGuessPvpDto: CreateGuessPvpDto) {
    this.guessPvpRepository.save(createGuessPvpDto);
  }

  findAll() {
    return `This action returns all guessPvp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} guessPvp`;
  }

  update(id: number, updateGuessPvpDto: UpdateGuessPvpDto) {
    return `This action updates a #${id} guessPvp`;
  }

  remove(id: number) {
    return `This action removes a #${id} guessPvp`;
  }
}
