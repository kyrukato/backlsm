import { IsJWT, IsNumber, IsPositive, IsString, IsUUID } from "class-validator";

export class UpdateSequencePvpDto{
    @IsNumber()
    @IsPositive()
    points: number;

    @IsNumber()
    @IsPositive()
    victorys: number;

    @IsNumber()
    @IsPositive()
    sequenceRemembered:number;

    @IsUUID()
    @IsString()
    userID: string;

}
