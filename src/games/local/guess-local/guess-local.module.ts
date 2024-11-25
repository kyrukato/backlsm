import { Module } from '@nestjs/common';
import { GuessLocalService } from './guess-local.service';
import { GuessLocalController } from './guess-local.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [GuessLocalController],
  providers: [GuessLocalService],
  imports: [],
  exports: [],
})
export class GuessLocalModule {}
