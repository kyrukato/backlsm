import { Module } from '@nestjs/common';
import { MemoryLocalService } from './memory-local.service';
import { MemoryLocalController } from './memory-local.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [MemoryLocalController],
  providers: [MemoryLocalService],
  imports: [],
  exports: [],
})
export class MemoryLocalModule {}
