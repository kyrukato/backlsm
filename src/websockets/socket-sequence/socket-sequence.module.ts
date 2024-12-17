import { Module } from '@nestjs/common';
import { SocketSequenceService } from './socket-sequence.service';
import { SocketSequenceGateway } from './socket-sequence.gateway';
import { DictionaryModule } from 'src/dictionary/dictionary.module';

@Module({
  providers: [SocketSequenceGateway, SocketSequenceService],
    imports: [DictionaryModule]
})
export class SocketSequenceModule {}
