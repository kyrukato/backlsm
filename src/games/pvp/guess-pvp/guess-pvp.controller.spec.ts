import { Test, TestingModule } from '@nestjs/testing';
import { GuessPvpController } from './guess-pvp.controller';
import { GuessPvpService } from './guess-pvp.service';

describe('GuessPvpController', () => {
  let controller: GuessPvpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuessPvpController],
      providers: [GuessPvpService],
    }).compile();

    controller = module.get<GuessPvpController>(GuessPvpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
