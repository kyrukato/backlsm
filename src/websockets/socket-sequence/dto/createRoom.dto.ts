import { IsBoolean, IsString, IsUUID } from "class-validator";

export class CreateRoomDto{
    @IsBoolean()
    publica: boolean;

    @IsUUID()
    @IsString()
    userID: string;
}