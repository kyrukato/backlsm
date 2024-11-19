import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text',{
        unique: true,
    })
    user: string;

    @Column('text')
    name: string;

    @Column('text',{
        unique: true
    })
    email: string;

    @Column('boolean')
    autenticated: boolean;

    @Column('boolean')
    status: boolean;
}
