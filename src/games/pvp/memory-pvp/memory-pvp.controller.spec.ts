import { Test, TestingModule } from '@nestjs/testing';
import { MemoryPvpController } from './memory-pvp.controller';
import { MemoryPvpService } from './memory-pvp.service';

describe('MemoryPvpController', () => {
  let controller: MemoryPvpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemoryPvpController],
      providers: [MemoryPvpService],
    }).compile();

    controller = module.get<MemoryPvpController>(MemoryPvpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
