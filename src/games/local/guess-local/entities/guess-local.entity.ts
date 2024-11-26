import { User } from "src/auth/entities/user.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GuessLocal {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(
        () => User,
        (user) => user.id,
        {onDelete: 'CASCADE'},
    )
    user:User;

    @Column('int',{
        default: 0,
    })
    sequenceRemembered: number;

    @Column('int',{
        default: 0,
    })
    points: number;

}
