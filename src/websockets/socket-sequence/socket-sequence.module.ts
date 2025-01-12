import { Module } from '@nestjs/common';
import { SocketSequenceService } from './socket-sequence.service';
import { SocketSequenceGateway } from './socket-sequence.gateway';
import { DictionaryModule } from 'src/dictionary/dictionary.module';
import { CommonModule } from 'src/common/common.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [SocketSequenceGateway, SocketSequenceService],
    imports: [DictionaryModule,CommonModule,AuthModule]
})
export class SocketSequenceModule {}
