import { WebSocketGateway } from '@nestjs/websockets';
import { SocketSequenceService } from './socket-sequence.service';

@WebSocketGateway()
export class SocketSequenceGateway {
  constructor(private readonly socketSequenceService: SocketSequenceService) {}
}
