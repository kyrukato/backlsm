import { Test, TestingModule } from '@nestjs/testing';
import { MemoryLocalService } from './memory-local.service';

describe('MemoryLocalService', () => {
  let service: MemoryLocalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemoryLocalService],
    }).compile();

    service = module.get<MemoryLocalService>(MemoryLocalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
