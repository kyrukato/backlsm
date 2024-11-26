import { Module } from '@nestjs/common';
import { GuessPvpService } from './guess-pvp.service';
import { GuessPvpController } from './guess-pvp.controller';
import { GuessPvp } from './entities/guess-pvp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GuessPvpController],
  providers: [GuessPvpService],
  imports: [
    TypeOrmModule.forFeature([GuessPvp]),
  ],
  exports: [GuessPvpService],
})
export class GuessPvpModule {}
