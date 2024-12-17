import { Socket,Server } from "socket.io";
import { EmptyPlayer, Player } from "../dto/player.dto";
import { RoomBackend, RoomStatus, statusRespuesta } from "../dto/room.dto";
import { CreateRoomDto } from "../dto/createRoom.dto";
import { Inject } from "@nestjs/common";
import { DictionaryService } from "src/dictionary/dictionary.service";
import { sign } from "crypto";

export class Sala{
    numeroSeñas = 50;
    publica: boolean;
    jugadores: [Player,Player] = [{...EmptyPlayer},{...EmptyPlayer}];
    id:number;
    socket:Socket;
    estado:RoomStatus = "ESPERANDO_JUGADOR";
    imageURL: string[]= [];
    signal: string[] = [];
    respuesta1: statusRespuesta = 'ESPERANDO_RESPUESTA';
    respuesta2: statusRespuesta = 'ESPERANDO_RESPUESTA';
    secuenciaP1: number = 0;
    secuenciaP2: number = 0;
    private readonly dictionaryService:DictionaryService;
    private io:Server;
    constructor(args:CreateRoomDto,socket:Socket,io:Server, dictionaryService:DictionaryService){
        this.publica = args.publica;
        this.socket = socket;
        this.io = io;
        this.dictionaryService = dictionaryService;
    }

    señalRandom():number{
        return Math.floor(Math.random() * (this.numeroSeñas - 2) + 1);
    }

    async agregarJugador(nombre:string){
        const indiceJugador = !this.jugadores[0].name ? 0 : 1;
        this.jugadores[indiceJugador].name = nombre;
        if(this.jugadores[1].name){
            this.estado = 'JUGAR';
            for (let i = 0; i < 3; i++) {
                const data =  await this.dictionaryService.findSignal(this.señalRandom());
                this.imageURL.push(data[0].imageURL);
                this.signal.push(data[0].name);
            }
        }
        this.comunicarSalas();
    }

    getSalas():RoomBackend{
        return{
            publica: this.publica,
            players: this.jugadores,
            roomID: this.id,
            status: this.estado,
            imageURL: this.imageURL,
            signal: this.signal,
        }
    }
    /**
     * comunica el estado actual de la sala
     */
    comunicarSalas(){
        this.io.to("sala-"+this.id).emit("sala",this.getSalas());
    }

    jugadorAbandono(){
        this.estado = 'ABANDONADO';
        this.comunicarSalas();
    }

    jugar(numeroJugador:1|2, respuesta:statusRespuesta, secuenciaRecordada:number){
        if(numeroJugador === 1){
            this.respuesta1 = respuesta;
            this.secuenciaP1 = secuenciaRecordada;
        }
        if(numeroJugador === 2){
            this.respuesta2 = respuesta;
            this.secuenciaP2 = secuenciaRecordada;
        }
        this.verificarVictoria();
    }
    async verificarVictoria(){
        if(this.respuesta1 === 'ESPERANDO_RESPUESTA' || this.respuesta2 === 'ESPERANDO_RESPUESTA') return;
        if((this.respuesta1 === 'CORRECTA' && this.respuesta2 === 'INCORRECTA') || (this.respuesta1 === 'CORRECTA' && this.respuesta2 === 'TIEMPO_AGOTADO')){
            this.estado = 'VICTORIA_P1';
        }
        if((this.respuesta2 === 'CORRECTA' && this.respuesta1 === 'INCORRECTA') || (this.respuesta2 === 'CORRECTA' && this.respuesta1 === 'TIEMPO_AGOTADO')){
            this.estado = 'VICTORIA_P2';
        }
        if(this.respuesta1 === 'CORRECTA' && this.respuesta2 === 'CORRECTA'){
            const data =  await this.dictionaryService.findSignal(this.señalRandom());
            for (let i = 0; i < 2; i++) {
                const data =  await this.dictionaryService.findSignal(this.señalRandom());
                this.imageURL.push(data[0].imageURL);
                this.signal.push(data[0].name);
            }
        }
        if((this.respuesta1 !== 'CORRECTA' && this.respuesta2 !== 'CORRECTA')){
            if(this.secuenciaP1 > this.secuenciaP2){
                this.estado = 'VICTORIA_P1';
            }else if(this.secuenciaP1 < this.secuenciaP2){
                this.estado = 'VICTORIA_P2';
            }else{
                this.estado = 'EMPATE';
            }
        }
        this.respuesta1 = 'ESPERANDO_RESPUESTA';
        this.respuesta2 = 'ESPERANDO_RESPUESTA';
        this.comunicarSalas();
    }
}