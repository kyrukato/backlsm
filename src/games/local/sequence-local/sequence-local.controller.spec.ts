import { Test, TestingModule } from '@nestjs/testing';
import { SequenceLocalController } from './sequence-local.controller';
import { SequenceLocalService } from './sequence-local.service';

describe('SequenceLocalController', () => {
  let controller: SequenceLocalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SequenceLocalController],
      providers: [SequenceLocalService],
    }).compile();

    controller = module.get<SequenceLocalController>(SequenceLocalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
