import { IsNumber, IsPositive, IsString, IsUUID, min } from "class-validator";

export class CreateGuessLocalDto {
    @IsString()
    @IsUUID()
    idUser:string;

    @IsNumber()
    @IsPositive()
    sequenceRemembered:number;

    @IsNumber()
    @IsPositive()
    points:number;
}
