import { Module } from '@nestjs/common';
import { GuessLocalService } from './guess-local.service';
import { GuessLocalController } from './guess-local.controller';
import { GuessLocal } from './entities/guess-local.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [GuessLocalController],
  providers: [GuessLocalService],
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([GuessLocal]),
  ],
  exports: [GuessLocalService],
})
export class GuessLocalModule {}
