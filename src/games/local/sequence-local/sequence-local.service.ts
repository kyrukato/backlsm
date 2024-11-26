import { Injectable } from '@nestjs/common';
import { CreateSequenceLocalDto } from './dto/create-sequence-local.dto';
import { UpdateSequenceLocalDto } from './dto/update-sequence-local.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SequenceLocal } from './entities/sequence-local.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SequenceLocalService {

  constructor(
    @InjectRepository(SequenceLocal)
    private readonly sequenceLocalRepository: Repository<SequenceLocal>
  ){}

  create(createSequenceLocalDto: CreateSequenceLocalDto) {
    this.sequenceLocalRepository.save(createSequenceLocalDto);
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
