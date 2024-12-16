import { Player } from "./player.dto"

export type RoomStatus ="ESPERANDO_JUGADOR" | "VICTORIA_P1" | "VICTORIA_P2" | "JUGAR" |
"ABANDONADO" | 'EMPATE'

export type statusRespuesta = 'INCORRECTA' | 'CORRECTA' | 'TIEMPO_AGOTADO' | 'ESPERANDO_RESPUESTA' 

export interface RoomBackend{
    publica: boolean;
    players: [Player,Player];
    roomID: number;
    status: RoomStatus;
    imageURL: string;
    signal: string;
}