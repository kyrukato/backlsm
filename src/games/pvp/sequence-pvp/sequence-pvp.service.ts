import { Injectable } from '@nestjs/common';
import { CreateSequencePvpDto } from './dto/create-sequence-pvp.dto';
import { UpdateSequencePvpDto } from './dto/update-sequence-pvp.dto';

@Injectable()
export class SequencePvpService {
  create(createSequencePvpDto: CreateSequencePvpDto) {
    return 'This action adds a new sequencePvp';
  }

  findAll() {
    return `This action returns all sequencePvp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sequencePvp`;
  }

  update(id: number, updateSequencePvpDto: UpdateSequencePvpDto) {
    return `This action updates a #${id} sequencePvp`;
  }

  remove(id: number) {
    return `This action removes a #${id} sequencePvp`;
  }
}
