import { Injectable } from '@nestjs/common';
import { CreateSequenceLocalDto } from './dto/create-sequence-local.dto';
import { UpdateSequenceLocalDto } from './dto/update-sequence-local.dto';

@Injectable()
export class SequenceLocalService {
  create(createSequenceLocalDto: CreateSequenceLocalDto) {
    return 'This action adds a new sequenceLocal';
  }

  findAll() {
    return `This action returns all sequenceLocal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sequenceLocal`;
  }

  update(id: number, updateSequenceLocalDto: UpdateSequenceLocalDto) {
    return `This action updates a #${id} sequenceLocal`;
  }

  remove(id: number) {
    return `This action removes a #${id} sequenceLocal`;
  }
}
