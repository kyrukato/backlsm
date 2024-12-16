import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { SocketSequenceService } from './socket-sequence.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({cors: true})
export class SocketSequenceGateway implements OnGatewayConnection, OnGatewayDisconnect{
  @WebSocketServer() server: Server
    constructor(private readonly socketSequenceService: SocketSequenceService) {}
    
    
    
      afterInit(){
        this.socketSequenceService.setServer(this.server);
      }
    
      handleConnection(client: Socket) {
        console.log("Nueva conexión: ");
        /*client.emit('Mensaje desde el back');
        client.on('mensaje-custom',() => console.log('Recibí un mensaje custom '))*/
        client.on('encontrarSala',(callback) => this.socketSequenceService.buscarSalaPublica(callback))
        client.on('crearSala',(args, callback) => this.socketSequenceService.crearSala(client,args,callback))
        client.on('unirseASala',(args, callback) => this.socketSequenceService.unirseASala(client,callback,args))
        client.on('jugar',(args)=> {
            this.socketSequenceService.buscarSala(args.salaId)?.jugar(args.jugador,args.status,args.secuenciaRecordada);
        });
        client.on('disconect',() => this.socketSequenceService.clienteDesconectado(client))
      }
    
      handleDisconnect(client: any) {
        this.socketSequenceService.clienteDesconectado(client);
      }
}
