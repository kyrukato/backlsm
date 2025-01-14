import { Module } from '@nestjs/common';
import { SequencePvpService } from './sequence-pvp.service';
import { SequencePvpController } from './sequence-pvp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SequencePvp } from './entities/sequence-pvp.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SequencePvpController],
  providers: [SequencePvpService],
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([SequencePvp]),
  ],
  exports: [SequencePvpService],
})
export class SequencePvpModule {}
