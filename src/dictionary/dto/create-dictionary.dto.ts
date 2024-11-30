import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateDictionaryDto {
    @ApiProperty({
        description: 'Nombre de la seña en LSM',
        example: 'Manzana'
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Descripción detallada que indica la manera correcta en la que se realiza la seña',
        example: 'Con la mano dominante se forma un puño cerrado con la palma de la mano hacia el frente y el pulgar se coloca en el costado de la mano.'
    })
    @IsString()
    description: string;

    @ApiProperty({
        description: 'Dirección URL donde se encuentra la imagen de la seña',
        example: '/Abecedario/A.png'
    })
    @IsString()
    imageURL: string;

    @ApiProperty({
        description: 'Categoría a la que pertenece la seña',
        example: 'Saludos'
    })
    @IsString()
    class: string;
}
