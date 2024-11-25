import { Test, TestingModule } from '@nestjs/testing';
import { GuessLocalController } from './guess-local.controller';
import { GuessLocalService } from './guess-local.service';

describe('GuessLocalController', () => {
  let controller: GuessLocalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuessLocalController],
      providers: [GuessLocalService],
    }).compile();

    controller = module.get<GuessLocalController>(GuessLocalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
