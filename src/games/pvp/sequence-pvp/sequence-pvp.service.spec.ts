import { Test, TestingModule } from '@nestjs/testing';
import { SequencePvpService } from './sequence-pvp.service';

describe('SequencePvpService', () => {
  let service: SequencePvpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SequencePvpService],
    }).compile();

    service = module.get<SequencePvpService>(SequencePvpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
