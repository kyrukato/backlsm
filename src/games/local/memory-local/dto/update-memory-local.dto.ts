import { IsJWT, IsNumber, IsPositive, IsString, IsUUID } from "class-validator";

export class UpdateMemoryLocalDto {
    @IsNumber()
    @IsPositive()
    points: number;

    @IsUUID()
    @IsString()
    userID: string;

}
