import { ApiProperty } from "@nestjs/swagger";
import { IsJWT, IsNumber, IsPositive, IsString, IsUUID } from "class-validator";

export class UpdateGuessPvpDto {
    // @ApiProperty({
    //     description:'Puntaje máximo alcanzado por el usuario en una partida',
    //     type: 'number',
    //     example: 100,
    //     required: true,
    // })
    // @IsNumber()
    // @IsPositive()
    // points: number;

    // @ApiProperty({
    //     description:'Número de victorias obtenidas por el usuario',
    //     type: 'number',
    //     example: 100,
    //     required: true,
    // })
    // @IsNumber()
    // @IsPositive()
    // victory: number;

    // @ApiProperty({
    //     description:'Cantidad máxima de cartas adivinadas por el usuario en una partida',
    //     type: 'number',
    //     example: 100,
    //     required: true,
    // })
    // @IsNumber()
    // @IsPositive()
    // quantity:number;

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
