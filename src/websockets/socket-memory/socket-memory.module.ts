import { Module } from '@nestjs/common';
import { SocketMemoryService } from './socket-memory.service';
import { SocketMemoryGateway } from './socket-memory.gateway';
import { DictionaryModule } from 'src/dictionary/dictionary.module';
import { CommonModule } from 'src/common/common.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [SocketMemoryGateway, SocketMemoryService],
  imports: [DictionaryModule,CommonModule,AuthModule]
})
export class SocketMemoryModule {}
