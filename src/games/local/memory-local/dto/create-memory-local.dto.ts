import { User } from "src/auth/entities/user.entity";

export class CreateMemoryLocalDto {
    user:User;
    level: number;
    unlocked:boolean;
}
