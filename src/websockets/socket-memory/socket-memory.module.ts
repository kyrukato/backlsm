import { Module } from '@nestjs/common';
import { SocketMemoryService } from './socket-memory.service';
import { SocketMemoryGateway } from './socket-memory.gateway';
import { DictionaryModule } from 'src/dictionary/dictionary.module';

@Module({
  providers: [SocketMemoryGateway, SocketMemoryService],
  imports: [DictionaryModule]
})
export class SocketMemoryModule {}
