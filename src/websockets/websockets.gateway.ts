import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { WebsocketsService } from './websockets.service';
import { Socket,Server } from 'socket.io';
@WebSocketGateway({cors:true})
export class WebsocketsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  constructor(private readonly websocketsService: WebsocketsService) {}
  handleDisconnect(client: Socket) {
    this.websocketsService.clienteDesconectado(client);
  }

  afterInit(){
    this.websocketsService.setServer(this.server);
  }
  
  handleConnection(client: Socket) {
    console.log("Nueva conexión: ");
    client.on('encontrarSala',(callback) => this.websocketsService.buscarSalaPublica(callback))
    client.on('crearSala',(args, callback) => this.websocketsService.crearSala(client,args,callback))
    client.on('unirseASala',(args, callback) => this.websocketsService.unirseASala(client,callback,args))
    client.on('jugar',(args)=> {
        console.log("Viendo de registrar una jugada ", this.websocketsService.buscarSala(args.salaId))
        this.websocketsService.buscarSala(args.salaId)?.jugar(args.jugador,args.posicion)
    });
  }

}