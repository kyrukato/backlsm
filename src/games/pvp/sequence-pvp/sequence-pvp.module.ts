import { Module } from '@nestjs/common';
import { SequencePvpService } from './sequence-pvp.service';
import { SequencePvpController } from './sequence-pvp.controller';

@Module({
  controllers: [SequencePvpController],
  providers: [SequencePvpService],
})
export class SequencePvpModule {}
