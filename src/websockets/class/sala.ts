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
        //Cambio de turno
        this.estado = this.estado === 'TURNO_P1' ? "TURNO_P2" : 'TURNO_P1';
        //Verificación de victoria o empate
        const fin = this.verificarVictoria();
        if(fin === 'EMPATE'){
            this.estado = 'EMPATE';
        }else if(typeof fin === "object"){
            const jugadorAfectado = numeroJugador === 1 ? 1 : 0
            this.jugadores[jugadorAfectado].vidas--;
            if(this.jugadores[jugadorAfectado].vidas === 0){
                this.estado = numeroJugador === 1 ? 'VICTORIA_FINAL_P1' : 'VICTORIA_FINAL_P2';
            } else{
                this.estado = numeroJugador === 1 ? 'VICTORIA_P1' : 'VICTORIA_P2';
            }
        }
        this.comunicarSalas();
    }

    verificarVictoria(): [number,number,number] | "EMPATE" | undefined{
        for(let i = 0; i < 3; i+=3){
            if(this.tablero[i] !== '' && this.tablero[i] === this.tablero[i+1] && this.tablero[i] === this.tablero[i+2]){
                return [i, i+1, i+2];
            }
        }
        for(let i = 0; i < 3; i++){
            if(this.tablero[i] !== '' && this.tablero[i] === this.tablero[i+3] && this.tablero[i] === this.tablero[i+6]){
                return [i, i+3, i+6];
            }
        }

        if(this.tablero[0] !== '' &&  this.tablero[0] === this.tablero[4] && this.tablero[0] === this.tablero[8]){
            return [0,4,8];
        }

        if(this.tablero[2] !== '' && this.tablero[2] === this.tablero[4] && this.tablero[2] === this.tablero[6]){
            return [2,4,6];
        }

        if(!this.tablero.includes("")) return "EMPATE";

        return undefined;
    }
}