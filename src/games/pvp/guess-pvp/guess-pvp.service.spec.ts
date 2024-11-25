import { Test, TestingModule } from '@nestjs/testing';
import { GuessPvpService } from './guess-pvp.service';

describe('GuessPvpService', () => {
  let service: GuessPvpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuessPvpService],
    }).compile();

    service = module.get<GuessPvpService>(GuessPvpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
