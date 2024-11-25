import { Test, TestingModule } from '@nestjs/testing';
import { MemoryLocalController } from './memory-local.controller';
import { MemoryLocalService } from './memory-local.service';

describe('MemoryLocalController', () => {
  let controller: MemoryLocalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemoryLocalController],
      providers: [MemoryLocalService],
    }).compile();

    controller = module.get<MemoryLocalController>(MemoryLocalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
