import { Inject, Injectable } from '@nestjs/common';
import { Sala } from './class/sala';
import { Server, Socket } from 'socket.io';
import { CrearSalaDto } from './dto/crearSala.dto';
import { UnirseSalaDto } from './dto/unirseSala.dto';

@Injectable()
export class WebsocketsService {
    private salas:Sala[] = []
    private idProximaSala = 0;
    private server:Server;

    setServer(server:Server){
        this.server = server;
    }

    /**Busca una sala disponible, si la encuentra devuelve el ID de la sala, sino devuelve null */
    buscarSalaPublica(callback: Function){
        const salaDisponible = this.salas.find(sala => {
            if(!sala.publica) return false;
            if(sala.jugadores[0].nombre && sala.jugadores[1].nombre) return false;
            return true
        })
        callback(salaDisponible ? salaDisponible.id : null);
    }

    crearSala(socket:Socket, args:CrearSalaDto , callback: Function){
        console.log('Creando salaa');
        const nuevaSala = new Sala(args,socket,this.server);
        nuevaSala.id = this.idProximaSala;
        this.idProximaSala++;
        this.salas.push(nuevaSala);
        this.unirseASala(socket,callback,{
            id: nuevaSala.id,
            nombreJugador: args.userID
        });
    }
    unirseASala(socket:Socket, callback: Function, args:UnirseSalaDto){
        if(!this.salas.length) return callback({exito:false, mensaje:'No existen salas'});
        const salaIndex = this.salas.findIndex(sala => sala.id === args.id);
        if(salaIndex === -1) return callback({exito:false, mensaje:'No existe sala con ID: '+args.id});
        if(this.salas[salaIndex].jugadores[0].nombre && this.salas[salaIndex].jugadores[1].nombre) return callback({exito:false, mensaje:'La sala está llena'});
        this.salas[salaIndex].agregarJugador(args.nombreJugador);
        socket.join('sala-'+this.salas[salaIndex].id);
        return callback({exito:true, mensaje:'Unido a la sala: '+this.salas[salaIndex].id, sala: this.salas[salaIndex].getSalas()});
    }

    buscarSala(id:number){
        return this.salas.find(sala => sala.id === id);
    }

    clienteDesconectado(client:Socket){
        if(client.rooms.size < 2) return;
        const salaJugador = this.salas.find(sala => sala.id == parseInt([...client.rooms][1].substring(5)))
        if(!salaJugador) return;
        salaJugador.jugadorAbandono();
        client.conn.close();
        this.salas = this.salas.filter(sala => sala.id !== salaJugador.id);
        console.log("Se acaba de cerrar la sala: ",salaJugador.id,' salas disponibles: ',this.salas);
    }
}
