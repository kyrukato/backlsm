import { WebSocketGateway } from '@nestjs/websockets';
import { SocketMemoryService } from './socket-memory.service';

@WebSocketGateway()
export class SocketMemoryGateway {
  constructor(private readonly socketMemoryService: SocketMemoryService) {}
}
