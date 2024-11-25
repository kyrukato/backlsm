import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { DictionaryModule } from 'src/dictionary/dictionary.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [DictionaryModule],
})
export class SeedModule {}
