import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';

export class UpdateGuessLocalDto {
    @ApiProperty({
        description: 'Cantidad de puntaje máximo alcanzado por el usuario',
        example: 200,
        minimum: 0
    })
    @IsNumber()
    @IsPositive()
    points: number;

    @ApiProperty({
        description: 'Cantidad máxima de señas adivinadas por el usuario en una partida',
        example: 10,
        minimum: 0,
    })
    @IsNumber()
    @IsPositive()
    quantity:number;

    @ApiProperty({
        description: 'ID del usuario que actualizará su puntaje',
        example: ''
    })
    @IsUUID()
    @IsString()
    userID: string;
}
