import { Socket,Server } from "socket.io";
import { Jugador, JugadorVacio } from "../dto/jugador.dto";
import { EstadoJuego, PosicionTablero, SalaBackend, Tablero } from "../dto/sala.dto";
import { CrearSalaDto } from "../dto/crearSala.dto";

export class Sala{
    publica: boolean;
    jugadores: [Jugador,Jugador] = [{...JugadorVacio},{...JugadorVacio}];
    id:number;
    socket:Socket;
    jugadorInicial: 0 | 1 = 0;
    estado:EstadoJuego = "ESPERANDO_JUGADOR";
    tablero:Tablero = ["","","","","","","","",""];
    private io:Server;

    constructor(args:CrearSalaDto,socket:Socket,io:Server){
        this.publica = args.publica;
        this.socket = socket;
        this.io = io;
    }

    agregarJugador(nombre:string){
        const indiceJugador = !this.jugadores[0].nombre ? 0 : 1;
        this.jugadores[indiceJugador].nombre = nombre;
        this.jugadores[indiceJugador].vidas = 3
        if(this.jugadores[1].nombre){
            this.estado = this.jugadorInicial === 0 ? 'TURNO_P1' : 'TURNO_P2';
            this.jugadorInicial = this.jugadorInicial === 0 ? 1 : 0;
        }
        this.comunicarSalas();
    }

    getSalas():SalaBackend{
        return{
            publica: this.publica,
            jugadores: this.jugadores,
            id: this.id,
            estado: this.estado,
            tablero: this.tablero,
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

    jugar(numeroJugador:1|2,posicion:PosicionTablero){
        if((numeroJugador !== 1 && this.estado === 'TURNO_P1') || (numeroJugador !== 2 && this.estado == 'TURNO_P2')) return;
        this.tablero[posicion] = numeroJugador;
        this.estado = this.estado === 'TURNO_P1' ? "TURNO_P2" : 'TURNO_P1';
        this.comunicarSalas();
    }
}