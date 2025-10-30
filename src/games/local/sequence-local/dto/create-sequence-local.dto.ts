import { User } from "src/auth/entities/user.entity";

export class CreateSequenceLocalDto {
    user:User;
    level: number;
    unlocked:boolean;
}
