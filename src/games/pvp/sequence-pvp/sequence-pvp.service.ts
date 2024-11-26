import { Injectable } from '@nestjs/common';
import { CreateSequencePvpDto } from './dto/create-sequence-pvp.dto';
import { UpdateSequencePvpDto } from './dto/update-sequence-pvp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SequencePvp } from './entities/sequence-pvp.entity';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';

@Injectable()
export class SequencePvpService {

  constructor(
    @InjectRepository(SequencePvp)
    private readonly sequencePvpRepository: Repository<SequencePvp>,
  ){}

  create(createSequencePvpDto: CreateSequencePvpDto) {
    this.sequencePvpRepository.save(createSequencePvpDto);
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
