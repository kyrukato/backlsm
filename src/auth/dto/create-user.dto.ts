import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUSerDto{
    @ApiProperty({
        description: 'Correro electrónico del usuario',
        example: 'ejemplo@ejemplo.com',
        required: true,
    })
    @IsString()
    @IsEmail()
    email:string;

    @ApiProperty({
        description: 'Contraseña de acceso designada por el usuario',
        example: 'abc123',
        required: true,
    })
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    password: string;

    @ApiProperty({
        description: 'Nombre del usuario',
        example: 'Jhon Doe',
        required: true,
    })
    @IsString()
    @MinLength(3)
    name: string;

}