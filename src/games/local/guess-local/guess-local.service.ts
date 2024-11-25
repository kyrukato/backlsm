import { Injectable } from '@nestjs/common';
import { CreateGuessLocalDto } from './dto/create-guess-local.dto';
import { UpdateGuessLocalDto } from './dto/update-guess-local.dto';

@Injectable()
export class GuessLocalService {
  create(createGuessLocalDto: CreateGuessLocalDto) {
    return 'This action adds a new guessLocal';
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
