import { Injectable } from '@nestjs/common';
import { CreateMemoryPvpDto } from './dto/create-memory-pvp.dto';
import { UpdateMemoryPvpDto } from './dto/update-memory-pvp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MemoryPvp } from './entities/memory-pvp.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemoryPvpService {

  constructor(
    @InjectRepository(MemoryPvp)
    private readonly memoryPvpRepository: Repository<MemoryPvp>
  ){}

  create(createMemoryPvpDto: CreateMemoryPvpDto) {
    this.memoryPvpRepository.save(createMemoryPvpDto);
  }

  findAll() {
    return `This action returns all memoryPvp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memoryPvp`;
  }

  update(id: number, updateMemoryPvpDto: UpdateMemoryPvpDto) {
    return `This action updates a #${id} memoryPvp`;
  }

  remove(id: number) {
    return `This action removes a #${id} memoryPvp`;
  }
}
