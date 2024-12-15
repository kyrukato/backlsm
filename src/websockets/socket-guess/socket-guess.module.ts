import { Module } from '@nestjs/common';
import { SocketGuessService } from './socket-guess.service';
import { SocketGuessGateway } from './socket-guess.gateway';
import { DictionaryService } from 'src/dictionary/dictionary.service';
import { DictionaryModule } from 'src/dictionary/dictionary.module';

@Module({
  providers: [SocketGuessGateway, SocketGuessService],
  imports: [DictionaryModule]
})
export class SocketGuessModule {}
