import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/auth/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SequencePvp {
    @ApiProperty({
        description:'ID autoincremental generado cuando se crea un nuevo usuario',
        type: 'number',
        example: 1,
        required: true,
    })
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty({
        description:'Número máximo de victorias acumuladas por el usuario',
        type: 'number',
        example: 100,
        required: true,
        default: 0,
    })
    @Column('int',{
        default: 0
    })
    victorys: number;

    @ApiProperty({
        description:'Cantidad máxima de señas adivinadas en forma secuencial por el usuario durante una partida',
        type: 'number',
        example: 100,
        required: true,
        default: 0,
    })
    @Column('int',{
        default: 0
    })
    sequenceRemembered:number;

    @ApiProperty({
        description:'Puntaje máximo logrado por el usuario durante una partida.',
        type: 'number',
        example: 100,
        required: true,
    })
    @Column('int',{
        default: 0
    })
    points:number;

    @ApiProperty({
        description:'Lave foránea que almacena el ID del usuario',
        type: 'string',
        example: '2104d802-027f-4ec6-838a-e7b7be5d570f',
        required: true,
    })
    @ManyToOne(
        () => User,
        (user) => user.id,
        {onDelete: 'CASCADE'},
    )
    user:User;
}
