import { Module } from '@nestjs/common';
import { MemoryPvpService } from './memory-pvp.service';
import { MemoryPvpController } from './memory-pvp.controller';

@Module({
  controllers: [MemoryPvpController],
  providers: [MemoryPvpService],
})
export class MemoryPvpModule {}
