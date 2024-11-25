import { Injectable } from '@nestjs/common';
import { CreateMemoryLocalDto } from './dto/create-memory-local.dto';
import { UpdateMemoryLocalDto } from './dto/update-memory-local.dto';

@Injectable()
export class MemoryLocalService {
  create(createMemoryLocalDto: CreateMemoryLocalDto) {
    return 'This action adds a new memoryLocal';
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
