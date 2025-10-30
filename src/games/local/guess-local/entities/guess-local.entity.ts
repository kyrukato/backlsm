import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/auth/entities/user.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GuessLocal {
    @ApiProperty({
        description:'ID autoincremental que se genera al momento de crear un nuevo usuario',
        type: 'number',
        example: 1,
        required: true,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description:'Puntaje máximo alcanzado por el usuario durante una partida',
        type: 'number',
        example: 100,
        required: true,
        default: 0,
    })
    @Column('int',{
        default: 0
    })
    points: number;

    @ApiProperty({
        description:'Cantidad máxima de señas adivinadas por el usuario durante una partida',
        type: 'number',
        example: 100,
        required: true,
        default: 0,
    })
    @Column('int',{
        default: 0
    })
    quantity: number;

    @ApiProperty({
        description: 'Registro que almacena la información de cada nivel individual de cada juego',
        type: 'number',
        example: 1,
        required: true,
    })
    @Column('int')
    level: number;

    @ApiProperty({
        description: 'Describe si el usuario ha desbloqueado el nivel o no.',
        type: 'boolean',
        example: false,
        required: true,
    })
    @Column('bool')
    unlocked: boolean;

    @ApiProperty({
        description:'Llave foránea que almacena el ID del usuario',
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
