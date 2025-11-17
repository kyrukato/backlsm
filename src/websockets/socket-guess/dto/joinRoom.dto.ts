import { IsNumber, IsPositive, IsString, IsUUID } from "class-validator";

export class JoinRoomDto{
    @IsNumber()
    @IsPositive()
    roomID: number;

    @IsUUID()
    @IsString()
    userID: string;

    @IsString()
    nickname: string;
}