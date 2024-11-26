import { Module } from '@nestjs/common';
import { GuessLocalService } from './guess-local.service';
import { GuessLocalController } from './guess-local.controller';
import { AuthService } from 'src/auth/auth.service';
import { GuessLocal } from './entities/guess-local.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMechanism } from 'typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [GuessLocalController],
  providers: [GuessLocalService],
  imports: [
    TypeOrmModule.forFeature([GuessLocal]),
  ],
  exports: [GuessLocalService],
})
export class GuessLocalModule {}
