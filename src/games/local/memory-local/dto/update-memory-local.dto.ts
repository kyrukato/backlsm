import { ApiProperty } from "@nestjs/swagger";
import { IsJWT, IsNumber, IsPositive, IsString, IsUUID } from "class-validator";

export class UpdateMemoryLocalDto {
    @ApiProperty({
        description: 'Puntaje máximo alcanzado por el usuario en una partida.',
        example: 100,
        type: 'number'
    })
    @IsNumber()
    @IsPositive()
    points: number;

    @ApiProperty({
        description: 'ID del usuario',
        example: '2104d802-027f-4ec6-838a-e7b7be5d570f',
        type: 'string'
    })
    @IsUUID()
    @IsString()
    userID: string;

}
