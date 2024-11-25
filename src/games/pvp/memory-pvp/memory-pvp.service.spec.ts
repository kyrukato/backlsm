import { Test, TestingModule } from '@nestjs/testing';
import { MemoryPvpService } from './memory-pvp.service';

describe('MemoryPvpService', () => {
  let service: MemoryPvpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemoryPvpService],
    }).compile();

    service = module.get<MemoryPvpService>(MemoryPvpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
