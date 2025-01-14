import { Module } from '@nestjs/common';
import { MemoryPvpService } from './memory-pvp.service';
import { MemoryPvpController } from './memory-pvp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemoryPvp } from './entities/memory-pvp.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [MemoryPvpController],
  providers: [MemoryPvpService],
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([MemoryPvp]),
  ],
  exports: [MemoryPvpService],
})
export class MemoryPvpModule {}
