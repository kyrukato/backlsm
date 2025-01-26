import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { SocketGuessService } from './socket-guess.service';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/common/interface/jwt-payload.interface';

@WebSocketGateway({cors: true, namespace:'guess'})
export class SocketGuessGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server
  constructor(
    private readonly socketGuessService: SocketGuessService,
    private readonly jwtService: JwtService
  ) {}

  afterInit(){
    this.socketGuessService.setServer(this.server);
  }

  handleConnection(client: Socket) {
    const token = client.handshake.headers.authentication as string;
    let payload: JwtPayload;
    try {
      console.log('Verificando token');
      payload = this.jwtService.verify(token);
      this.socketGuessService.verifyClient(client,payload.id);
    } catch (error) {
      console.log('Conexión rechazada: adivina');
      client.disconnect();
      return;
    }
    console.log("Nueva conexión: adivina");
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

  handleDisconnect(client: Socket) {
    this.socketGuessService.clienteDesconectado(client);
  }

}
