import { IsJWT, IsNumber, IsPositive, IsString, IsUUID } from "class-validator";

export class UpdateSequenceLocalDto{
    @IsNumber()
    @IsPositive()
    points: number;

    @IsNumber()
    @IsPositive()
    sequenceRemembered:number;

    @IsUUID()
    @IsString()
    userID: string;

}
