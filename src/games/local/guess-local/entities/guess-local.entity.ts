import { User } from "src/auth/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GuessLocal {
    @PrimaryGeneratedColumn()
    id:number;

    /*@OneToOne(
        () => User,
        (user) => user.id,
        {cascade: true, eager:true},
    )*/
    @Column('text')
    idUser:string;

    @Column('int')
    sequenceRemembered: number;

    @Column('int')
    points: number;

}
