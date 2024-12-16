import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { SocketMemoryService } from './socket-memory.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({cors: true,namespace:'memory'})
export class SocketMemoryGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server
  constructor(private readonly socketMemoryService: SocketMemoryService) {}
  
  
  
    afterInit(){
      this.socketMemoryService.setServer(this.server);
    }
  
    handleConnection(client: Socket) {
      console.log("Nueva conexión: ");
      /*client.emit('Mensaje desde el back');
      client.on('mensaje-custom',() => console.log('Recibí un mensaje custom '))*/
      client.on('encontrarSala',(callback) => this.socketMemoryService.buscarSalaPublica(callback))
      client.on('crearSala',(args, callback) => this.socketMemoryService.crearSala(client,args,callback))
      client.on('unirseASala',(args, callback) => this.socketMemoryService.unirseASala(client,callback,args))
      client.on('jugar',(args)=> {
          console.log("Viendo de registrar una jugada ", this.socketMemoryService.buscarSala(args.salaId));
          this.socketMemoryService.buscarSala(args.salaId)?.jugar(args.jugador,args.status);
      });
      client.on('disconect',() => this.socketMemoryService.clienteDesconectado(client))
    }
  
    handleDisconnect(client: any) {
      this.socketMemoryService.clienteDesconectado(client);
    }
}
