import { Injectable } from '@nestjs/common';
import { CreateGuessPvpDto } from './dto/create-guess-pvp.dto';
import { UpdateGuessPvpDto } from './dto/update-guess-pvp.dto';

@Injectable()
export class GuessPvpService {
  create(createGuessPvpDto: CreateGuessPvpDto) {
    return 'This action adds a new guessPvp';
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
