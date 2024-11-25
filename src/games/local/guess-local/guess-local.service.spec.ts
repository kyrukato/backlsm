import { Test, TestingModule } from '@nestjs/testing';
import { GuessLocalService } from './guess-local.service';

describe('GuessLocalService', () => {
  let service: GuessLocalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuessLocalService],
    }).compile();

    service = module.get<GuessLocalService>(GuessLocalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
