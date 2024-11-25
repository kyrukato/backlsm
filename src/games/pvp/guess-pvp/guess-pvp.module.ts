import { Module } from '@nestjs/common';
import { GuessPvpService } from './guess-pvp.service';
import { GuessPvpController } from './guess-pvp.controller';

@Module({
  controllers: [GuessPvpController],
  providers: [GuessPvpService],
})
export class GuessPvpModule {}
