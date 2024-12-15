import { Module } from '@nestjs/common';
import { SocketSequenceService } from './socket-sequence.service';
import { SocketSequenceGateway } from './socket-sequence.gateway';

@Module({
  providers: [SocketSequenceGateway, SocketSequenceService],
})
export class SocketSequenceModule {}
