import { Module } from '@nestjs/common';
import { WebsocketsService } from './websockets.service';
import { WebsocketsGateway } from './websockets.gateway';
import { Server } from 'socket.io';
import { SocketMemoryModule } from './socket-memory/socket-memory.module';
import { SocketSequenceModule } from './socket-sequence/socket-sequence.module';
import { SocketGuessModule } from './socket-guess/socket-guess.module';

@Module({
  providers: [WebsocketsGateway, WebsocketsService],
  exports: [WebsocketsService],
  imports: [SocketMemoryModule, SocketSequenceModule, SocketGuessModule],
})
export class WebsocketsModule {}
