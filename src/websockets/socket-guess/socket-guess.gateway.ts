import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { SocketGuessService } from './socket-guess.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({cors: true})
export class SocketGuessGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server
  constructor(private readonly socketGuessService: SocketGuessService) {}

  afterInit(){
    this.socketGuessService.setServer(this.server);
  }

  handleConnection(client: Socket) {
    console.log("Nueva conexión: ");
    /*client.emit('Mensaje desde el back');
    client.on('mensaje-custom',() => console.log('Recibí un mensaje custom '))*/
    client.on('encontrarSala',(callback) => this.socketGuessService.buscarSalaPublica(callback))
    client.on('crearSala',(args, callback) => this.socketGuessService.crearSala(client,args,callback))
    client.on('unirseASala',(args, callback) => this.socketGuessService.unirseASala(client,callback,args))
    client.on('jugar',(args)=> {
        console.log("Viendo de registrar una jugada ", this.socketGuessService.buscarSala(args.salaId));
        this.socketGuessService.buscarSala(args.salaId)?.jugar(args.jugador,args.status);
    });
    client.on('disconect',() => this.socketGuessService.clienteDesconectado(client))
  }

  handleDisconnect(client: any) {
    this.socketGuessService.clienteDesconectado(client);
  }

}
