import { Module } from '@nestjs/common';
import { MemoryLocalService } from './memory-local.service';
import { MemoryLocalController } from './memory-local.controller';
import { AuthService } from 'src/auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemoryLocal } from './entities/memory-local.entity';

@Module({
  controllers: [MemoryLocalController],
  providers: [MemoryLocalService],
  imports: [
    TypeOrmModule.forFeature([MemoryLocal]),
  ],
  exports: [MemoryLocalService],
})
export class MemoryLocalModule {}
