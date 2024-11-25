import { Test, TestingModule } from '@nestjs/testing';
import { SequencePvpController } from './sequence-pvp.controller';
import { SequencePvpService } from './sequence-pvp.service';

describe('SequencePvpController', () => {
  let controller: SequencePvpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SequencePvpController],
      providers: [SequencePvpService],
    }).compile();

    controller = module.get<SequencePvpController>(SequencePvpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
