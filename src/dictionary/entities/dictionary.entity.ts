import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dictionary {
    @ApiProperty({
        description:'ID autoincremental generado al registrar una nueva seña.',
        type: 'number',
        example: 1,
        required: true,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description:'Nombre de la seña',
        type: 'string',
        example: 'Marzo',
        required: true,
    })
    @Column('text',{
        unique:true,
    })
    name: string;

    @ApiProperty({
        description:'Descripción que permite al usuario saber como se hace la seña.',
        type: 'string',
        example: 'Con la mano dominante, se flexionan los dedos meñique y pulgar hacia la palma mientras que los dedos del índice al anular se extienden juntos, se hace un movimiento circular alrededor de la oreja.',
        required: true,
    })
    @Column('text')
    description: string;

    @ApiProperty({
        description:'URL donde se encuentra la imagen de la seña dentro del front',
        type: 'string',
        example: '/Fechas/MARZO.png',
        required: true,
    })
    @Column('text')
    imageURL: string;

    @ApiProperty({
        description:'Categoría a la cual pertenece la seña',
        type: 'string',
        example: 'Mes',
        required: true,
    })
    @Column('text')
    class: string;
}
