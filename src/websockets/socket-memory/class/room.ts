import { Socket,Server } from "socket.io";
import { EmptyPlayer, Player } from "../dto/player.dto";
import { RoomBackend, RoomStatus, Tablero } from "../dto/room.dto";
import { CreateRoomDto } from "../dto/createRoom.dto";
import { Inject } from "@nestjs/common";
import { DictionaryService } from "src/dictionary/dictionary.service";
import { sign } from "crypto";
import { stat } from "fs";

export class Sala{
    numeroSeñasMax = 96;
    numeroSeñasMin = 1;
    publica: boolean;
    jugadores: [Player,Player] = [{...EmptyPlayer},{...EmptyPlayer}];
    id:number;
    socket:Socket;
    estado:RoomStatus = "ESPERANDO_JUGADOR";
    tablero:Tablero = ['','','','','','','','','','','','','','','','','','','','','','','',''];
    sena:string[] = ['','','','','','','','','','','','',];
    card1: number = -1;
    card2: number = -1;
    paresP1: number = 0;
    paresP2: number = 0;
    esPar: boolean = false;
    private readonly dictionaryService:DictionaryService;
    private io:Server;
    constructor(args:CreateRoomDto,socket:Socket,io:Server, dictionaryService:DictionaryService){
        this.publica = args.publica;
        this.socket = socket;
        this.io = io;
        this.dictionaryService = dictionaryService;
    }

    señalRandom():number{
        return Math.floor(Math.random() * (this.numeroSeñasMax - this.numeroSeñasMin + 1) + 1);
    }

    async agregarJugador(nombre:string){
        const indiceJugador = !this.jugadores[0].name ? 0 : 1;
        this.jugadores[indiceJugador].name = nombre;
        if(this.jugadores[1].name){
            this.estado = 'TURNO_P1';
            this.prepararTablero();
        }
        this.comunicarSalas();
    }

    async prepararTablero(){
        let imageURL:string[] = ['','','','','','','','','','','','',];
        let j = 0;
        for (let i = 0; i < this.sena.length-1; i++) {
            const data =  await this.dictionaryService.findSignal(this.señalRandom());
            this.sena[i] = data[0].name;
            imageURL[i] = data[0].imageURL;
        }
        do {
            this.tablero[j] = imageURL[j];
            this.tablero[j+1] = imageURL[j];
            j+=2;
        } while (j < this.tablero.length);
        this.ordenarRandom();
    }

    ordenarRandom(){
        for (let i = this.tablero.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio
            [this.tablero[i], this.tablero[j]] = [this.tablero[j], this.tablero[i]]; // Intercambiar elementos
        }
    }


    getSalas():RoomBackend{
        return{
            publica: this.publica,
            players: this.jugadores,
            roomID: this.id,
            status: this.estado,
            card1: this.card1,
            card2: this.card2,
            esPar: this.esPar,
            tablero: this.tablero,
            paresP1: this.paresP1,
            paresP2: this.paresP2
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
    
    jugar(numeroJugador:1|2,status:RoomStatus,carta1:number,carta2:number, par:boolean){
        if(status === 'TIEMPO_AGOTADO_P1'){
            this.estado = 'VICTORIA_P2';
            this.comunicarSalas();
        }
        else if(status === 'TIEMPO_AGOTADO_P2'){
            this.estado = "VICTORIA_P1";
            this.comunicarSalas();
        }
        else if(status === 'TABLERO_COMPLETO'){
            this.estado = numeroJugador === 1 ? 'VICTORIA_P1' : 'VICTORIA_P2';
            this.comunicarSalas();
        }
        else {
            if(numeroJugador === 1){
                if(carta2 < 0){
                    this.estado = 'TURNO_P1';
                    this.card1 = carta1;
                    this.esPar = par;
                    this.comunicarSalas();
                }
                else{
                    if(par){
                        this.paresP1 ++;
                        this.estado = 'TURNO_P1';
                        this.esPar = par;
                        this.card2 = carta2;
                        this.comunicarSalas();
                        this.esPar = false;
                        this.card2 = -1;
                    }
                    else{
                        this.estado = 'TURNO_P2';
                        this.esPar = par;
                        this.card2 = carta2;
                        this.comunicarSalas();
                        this.card1 = -1;
                        this.card2 = -1;
                        this.esPar = false;
                    }
                }
            }
            else if(numeroJugador === 2){
                if(carta2 < 0){
                    this.estado = 'TURNO_P2';
                    this.card1 = carta1;
                    this.esPar = par;
                    this.comunicarSalas();
                }
                else{
                    if(par){
                        this.paresP2 ++;
                        this.estado = 'TURNO_P2';
                        this.esPar = par;
                        this.card2 = carta2;
                        this.comunicarSalas();
                        this.esPar = false;
                        this.card2 = -1;
                    }
                    else{
                        this.estado = 'TURNO_P1';
                        this.esPar = par;
                        this.card2 = carta2;
                        this.comunicarSalas();
                        this.card1 = -1;
                        this.card2 = -1;
                        this.esPar = false;
                    }
                }
            }
        }
    }
}