import { Module } from '@nestjs/common';
import { SocketMemoryService } from './socket-memory.service';
import { SocketMemoryGateway } from './socket-memory.gateway';

@Module({
  providers: [SocketMemoryGateway, SocketMemoryService],
})
export class SocketMemoryModule {}
