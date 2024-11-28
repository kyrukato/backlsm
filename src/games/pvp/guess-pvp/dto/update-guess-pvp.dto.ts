import { IsJWT, IsNumber, IsPositive, IsString, IsUUID } from "class-validator";

export class UpdateGuessPvpDto {
    @IsNumber()
    @IsPositive()
    points: number;

    @IsNumber()
    @IsPositive()
    victory: number;

    @IsNumber()
    @IsPositive()
    quantity:number;

    @IsUUID()
    @IsString()
    userID: string;

}
