import { Module } from '@nestjs/common';
import { MemoryPvpService } from './memory-pvp.service';
import { MemoryPvpController } from './memory-pvp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemoryPvp } from './entities/memory-pvp.entity';

@Module({
  controllers: [MemoryPvpController],
  providers: [MemoryPvpService],
  imports: [
    TypeOrmModule.forFeature([MemoryPvp]),
  ],
  exports: [MemoryPvpService],
})
export class MemoryPvpModule {}
