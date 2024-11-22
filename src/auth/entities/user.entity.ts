import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique: true
    })
    email: string;

    @Column('text',{
        select:false
    })
    password: string;

    @Column('text')
    name: string;

    @Column('bool',{
        default: true
    })
    isActive: boolean;

    @Column('text',{
        default: 'user'
    })
    rol: string;

    @Column('text')
    token: string;

    @BeforeInsert()
    checFieldBeforeInsert(){
        this.email= this.email.toLocaleLowerCase().trim();
    }

    @BeforeUpdate()
    checFieldBeforeUpdate(){
        this.checFieldBeforeInsert();
    }
}
