import { IsNumber, IsPositive, IsString, IsUUID, min } from "class-validator";
import { User } from "src/auth/entities/user.entity";

export class CreateGuessLocalDto {
    user: User;
    level: number;
    unlocked: boolean;
}
