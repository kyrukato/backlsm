import { Injectable } from '@nestjs/common';
import { CreateMemoryPvpDto } from './dto/create-memory-pvp.dto';
import { UpdateMemoryPvpDto } from './dto/update-memory-pvp.dto';

@Injectable()
export class MemoryPvpService {
  create(createMemoryPvpDto: CreateMemoryPvpDto) {
    return 'This action adds a new memoryPvp';
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
