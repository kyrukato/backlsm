import { User } from "src/auth/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SequencePvp {

    @PrimaryGeneratedColumn()
    id:number;

    @Column('int',{
        default: 0
    })
    victorys: number;

    @Column('int',{
        default: 0
    })
    sequenceRemembered:number;

    @Column('int',{
        default: 0
    })
    points:number;

    @ManyToOne(
        () => User,
        (user) => user.id,
        {onDelete: 'CASCADE'},
    )
    user:User;
}
