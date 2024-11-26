
import { GuessLocal } from "src/games/local/guess-local/entities/guess-local.entity";
import { MemoryLocal } from "src/games/local/memory-local/entities/memory-local.entity";
import { SequenceLocal } from "src/games/local/sequence-local/entities/sequence-local.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(
        () => GuessLocal,
        (guessLocal) => guessLocal.user,
        {onUpdate: 'CASCADE'},
    )
    guessLocal:GuessLocal[];

    @OneToMany(
        () => SequenceLocal,
        (sequenceLocal) => sequenceLocal.user,
        {onUpdate: 'CASCADE'},
    )
    sequenceLocal:SequenceLocal[];

    @OneToMany(
        () => MemoryLocal,
        (memoryLocal) => memoryLocal.user,
        {onUpdate: 'CASCADE'},
    )
    memoryLocal:MemoryLocal[];



    @BeforeInsert()
    checFieldBeforeInsert(){
        this.email= this.email.toLocaleLowerCase().trim();
    }

    @BeforeUpdate()
    checFieldBeforeUpdate(){
        this.checFieldBeforeInsert();
    }
    
}
