import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/auth/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GuessPvp {
    @ApiProperty({
        description:'ID autoincremental con cada nuevo registro en la BD',
        type: 'number',
        example: 1,
        required: true,
    })
    @PrimaryGeneratedColumn()
    id: string;

    @ApiProperty({
        description:'Número de victorias obtenidas por el usuario',
        type: 'number',
        example: 100,
        required: true,
        default:0
    })
    @Column('int',{
        default: 0
    })
    victorys: number

    @ApiProperty({
        description:'Puntaje máximo alcanzado por el usuario en una partida',
        type: 'number',
        example: 100,
        required: true,
        default: 0,
    })
    @Column('int',{
        default: 0
    })
    points: number

    @ApiProperty({
        description:'Cantidad máxima de señas adivinadas por el usuario en una partida',
        type: 'number',
        example: 100,
        required: true,
        default: 0,
    })
    @Column('int',{
        default: 0
    })
    quantity: number

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
