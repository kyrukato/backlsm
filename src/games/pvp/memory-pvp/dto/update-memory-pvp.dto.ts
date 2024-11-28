import { IsJWT, IsNumber, IsPositive, IsString, IsUUID } from "class-validator";

export class UpdateMemoryPvpDto {
    @IsNumber()
    @IsPositive()
    victorys: number;

    @IsUUID()
    @IsString()
    userID: string;

}
