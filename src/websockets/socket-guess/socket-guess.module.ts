import { Module } from '@nestjs/common';
import { SocketGuessService } from './socket-guess.service';
import { SocketGuessGateway } from './socket-guess.gateway';
import { DictionaryService } from 'src/dictionary/dictionary.service';
import { DictionaryModule } from 'src/dictionary/dictionary.module';
import { CommonModule } from 'src/common/common.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [SocketGuessGateway, SocketGuessService],
  imports: [DictionaryModule,CommonModule,AuthModule]
})
export class SocketGuessModule {}
