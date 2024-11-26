import { Injectable } from '@nestjs/common';
import { CreateMemoryLocalDto } from './dto/create-memory-local.dto';
import { UpdateMemoryLocalDto } from './dto/update-memory-local.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MemoryLocal } from './entities/memory-local.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemoryLocalService {

  constructor(
    @InjectRepository(MemoryLocal)
    private readonly memoryLocalRepository: Repository<MemoryLocal>
  ){}

  create(createMemoryLocalDto: CreateMemoryLocalDto) {
    this.memoryLocalRepository.save(createMemoryLocalDto);
  }

  findAll() {
    return `This action returns all memoryLocal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memoryLocal`;
  }

  update(id: number, updateMemoryLocalDto: UpdateMemoryLocalDto) {
    return `This action updates a #${id} memoryLocal`;
  }

  remove(id: number) {
    return `This action removes a #${id} memoryLocal`;
  }
}
