import { Injectable } from '@nestjs/common';
import { DictionaryService } from 'src/dictionary/dictionary.service';
import { Server, Socket } from 'socket.io';
import { JoinRoomDto } from './dto/joinRoom.dto';
import { CreateRoomDto } from './dto/createRoom.dto';
import { Sala } from './class/room';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SocketMemoryService {
    private salas:Sala[] = []
    private idProximaSala = 0;
    private server:Server;
    
    constructor(
        private readonly dictionaryService:DictionaryService,
        @InjectRepository(User)
        private readonly userRepository:Repository<User>
    ){}
    
    async verifyClient(client:Socket,userID:string){
        const user = await this.userRepository.findOneBy({id:userID});
        if(!user || !user.isActive || (user.rol === 'guest')) client.disconnect();
    }

    setServer(server:Server){
        this.server = server;
    }
    
    /**Busca una sala disponible, si la encuentra devuelve el ID de la sala, sino devuelve null */
    buscarSalaPublica(callback: Function){
        const salaDisponible = this.salas.find(sala => {
            if(!sala.publica) return false;
            if(sala.jugadores[0].name && sala.jugadores[1].name) return false;
            return true
        })
        callback(salaDisponible ? salaDisponible.id : null);
    }
    
    crearSala(socket:Socket, args:CreateRoomDto , callback: Function){
        console.log('creando salaa');
        const nuevaSala = new Sala(args,socket,this.server,this.dictionaryService);
        nuevaSala.id = this.idProximaSala;
        console.log("ID sala: ",nuevaSala.id);
        this.idProximaSala++;
        this.salas.push(nuevaSala);
        this.unirseASala(socket,callback,{
            roomID: nuevaSala.id,
            userID: args.userID
        });
    }
    
    unirseASala(socket:Socket, callback: Function, args:JoinRoomDto){
        if(!this.salas.length) return callback({exito:false, mensaje:'No existen salas'});
        const salaIndex = this.salas.findIndex(sala => sala.id === args.roomID);
        if(salaIndex === -1) return callback({exito:false, mensaje:'No existe sala con ID: '+args.roomID});
        if(this.salas[salaIndex].jugadores[0].name && this.salas[salaIndex].jugadores[1].name) return callback({exito:false, mensaje:'La sala está llena'});
        this.salas[salaIndex].agregarJugador(args.userID);
        socket.join('sala-'+this.salas[salaIndex].id);
        return callback({exito:true, mensaje:'Unido a la sala: '+this.salas[salaIndex].id, sala: this.salas[salaIndex].getSalas()});
    }
    
    buscarSala(id:number){
        return this.salas.find(sala => sala.id === id);
    }
    
    clienteDesconectado(client:Socket){
        console.log('el cliente estaba en las salas',client.rooms);
        if(client.rooms.size < 2) return;
            /*const salaJugador = this.salas.find(sala => sala.id == parseInt([...client.rooms][1].substring(5)))
            if(!salaJugador) return;
            salaJugador.jugadorAbandono();
            client.conn.close();
            this.salas = this.salas.filter(sala => sala.id !== salaJugador.id);
            console.log("Se acaba de cerrar la sala: ",salaJugador.id,' salas disponibles: ',this.salas);*/
    }
}
