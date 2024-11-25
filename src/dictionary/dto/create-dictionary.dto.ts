import { IsString } from "class-validator";

export class CreateDictionaryDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    imageURL: string;

    @IsString()
    class: string;
}
