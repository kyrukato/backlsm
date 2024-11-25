import { Test, TestingModule } from '@nestjs/testing';
import { SequenceLocalService } from './sequence-local.service';

describe('SequenceLocalService', () => {
  let service: SequenceLocalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SequenceLocalService],
    }).compile();

    service = module.get<SequenceLocalService>(SequenceLocalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
