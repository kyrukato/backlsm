import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class LoginUSerDto{

    @ApiProperty({
        description: 'Correo electrónico proporcionado por el usuario',
        example: 'ejemplo@ejemplo.com'
    })
    @IsString()
    @IsEmail()
    email:string;

    @ApiProperty({
        description: 'Contraseña de acceso registrada por el usuario',
        example: 'abc123'
    })
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    password: string;

}