import { User } from "src/auth/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GuessPvp {
    @PrimaryGeneratedColumn()
    id: string;

    @Column('int',{
        default: 0
    })
    victorys: number

    @Column('int',{
        default: 0
    })
    points: number

    @Column('int',{
        default: 0
    })
    quantity: number

    @ManyToOne(
        () => User,
        (user) => user.id,
        {onDelete: 'CASCADE'},
    )
    user:User;
}
