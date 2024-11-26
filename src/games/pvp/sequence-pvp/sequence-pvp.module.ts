import { Module } from '@nestjs/common';
import { SequencePvpService } from './sequence-pvp.service';
import { SequencePvpController } from './sequence-pvp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SequencePvp } from './entities/sequence-pvp.entity';

@Module({
  controllers: [SequencePvpController],
  providers: [SequencePvpService],
  imports: [
    TypeOrmModule.forFeature([SequencePvp]),
  ],
  exports: [SequencePvpService],
})
export class SequencePvpModule {}
