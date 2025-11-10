import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { SocketSequenceService } from './socket-sequence.service';
import { Server, Socket } from 'socket.io';
import { JwtPayload } from 'src/common/interface/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@WebSocketGateway({cors: {
    origin: [
      'https://lsm-front.vercel.app', // dominio del frontend en producción
      'http://localhost:4200',        // desarrollo local (Angular)
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  }, 
  namespace:'sequence'})
export class SocketSequenceGateway implements OnGatewayConnection, OnGatewayDisconnect{
  @WebSocketServer() server: Server
    constructor(
      private readonly socketSequenceService: SocketSequenceService,
          private readonly jwtService: JwtService
      ) {}
      afterInit(){
        this.socketSequenceService.setServer(this.server);
      }
    
      handleConnection(client: Socket) {
        const token = client.handshake.headers.authentication as string;
            let payload: JwtPayload;
            try {
              console.log('Verificando token');
              payload = this.jwtService.verify(token);
              this.socketSequenceService.verifyClient(client,payload.id);
            } catch (error) {
              console.log('conexión rechazada')
              client.disconnect();
              return;
            }
        console.log("Nueva conexión: secuencia");
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
    
      handleDisconnect(client: Socket) {
        this.socketSequenceService.clienteDesconectado(client);
      }
}
