import { IsString } from "class-validator";

export class Player{
    @IsString()
    name: string;

}

export const EmptyPlayer:Player = {
    name: ''
}