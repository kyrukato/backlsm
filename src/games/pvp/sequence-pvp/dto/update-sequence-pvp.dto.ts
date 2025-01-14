import { ApiProperty } from "@nestjs/swagger";
import { IsJWT, IsNumber, IsPositive, IsString, IsUUID } from "class-validator";

export class UpdateSequencePvpDto{
    @ApiProperty({
        description:'Cantidad máxima de puntos obtenidos por el usuario durante una partida',
        type: 'number',
        example: 100,
        required: true,
    })
    @IsNumber()
    @IsPositive()
    points: number;

    @ApiProperty({
        description:'Número máximo de victorias acumuladas por el usuario en este juego.',
        type: 'number',
        example: 100,
        required: true,
    })
    @IsNumber()
    @IsPositive()
    victorys: number;

    @ApiProperty({
        description:'Número máximo de cartas adivinadas en secuencia por el usuario durante una partida',
        type: 'number',
        example: 100,
        required: true,
    })
    @IsNumber()
    @IsPositive()
    sequenceRemembered:number;

    @ApiProperty({
        description:'ID del usuario',
        type: 'string',
        example: '2104d802-027f-4ec6-838a-e7b7be5d570f',
        required: true,
    })
    @IsUUID()
    @IsString()
    userID: string;

}
