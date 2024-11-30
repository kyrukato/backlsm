import { ApiProperty } from "@nestjs/swagger";
import { IsJWT, IsNumber, IsPositive, IsString, IsUUID } from "class-validator";

export class UpdateSequenceLocalDto{
    @ApiProperty({
        description: 'Puntaje máximo alcanzado por un usuario en una partida',
        type: 'number',
        example: 100,
        required: true,
    })
    @IsNumber()
    @IsPositive()
    points: number;

    @ApiProperty({
        description: 'Secuencia máxima de cartas recordadas por el usuairo en una partida',
        type: 'number',
        example: 100,
        required: true,
    })
    @IsNumber()
    @IsPositive()
    sequenceRemembered:number;

    @ApiProperty({
        description: 'ID del usuario',
        type: 'string',
        example: '2104d802-027f-4ec6-838a-e7b7be5d570f',
        required: true,
    })
    @IsUUID()
    @IsString()
    userID: string;

}
