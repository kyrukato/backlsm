import { IsJWT, IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';

export class UpdateGuessLocalDto {
    @IsNumber()
    @IsPositive()
    points: number;

    @IsNumber()
    @IsPositive()
    quantity:number;

    @IsUUID()
    @IsString()
    userID: string;
}
