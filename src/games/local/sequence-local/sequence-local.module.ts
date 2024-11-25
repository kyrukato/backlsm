import { Module } from '@nestjs/common';
import { SequenceLocalService } from './sequence-local.service';
import { SequenceLocalController } from './sequence-local.controller';
import { AuthService } from 'src/auth/auth.service';
import { SequenceLocal } from './entities/sequence-local.entity';

@Module({
  controllers: [SequenceLocalController],
  providers: [SequenceLocalService],
  imports: [],
  exports: [],
})
export class SequenceLocalModule {}
