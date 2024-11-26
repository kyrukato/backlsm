
import { GuessLocal } from "src/games/local/guess-local/entities/guess-local.entity";
import { MemoryLocal } from "src/games/local/memory-local/entities/memory-local.entity";
import { SequenceLocal } from "src/games/local/sequence-local/entities/sequence-local.entity";
import { GuessPvp } from "src/games/pvp/guess-pvp/entities/guess-pvp.entity";
import { MemoryPvp } from "src/games/pvp/memory-pvp/entities/memory-pvp.entity";
import { MemoryPvpModule } from "src/games/pvp/memory-pvp/memory-pvp.module";
import { SequencePvp } from "src/games/pvp/sequence-pvp/entities/sequence-pvp.entity";
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

    @OneToMany(
        () => GuessPvp,
        (guessPvp) => guessPvp.user,
        {onUpdate: 'CASCADE'},
    )
    guessPvp:GuessPvp[];

    @OneToMany(
        () => SequencePvp,
        (sequencePvp)=> sequencePvp.user,
        {onUpdate: 'CASCADE'},
    )
    sequencePvp: SequencePvp[];

    @OneToMany(
        () => MemoryPvp,
        (memoryPvp) => memoryPvp.user,
        {onUpdate: 'CASCADE'}
    )
    memoruPvp: MemoryPvp[];

    @BeforeInsert()
    checFieldBeforeInsert(){
        this.email= this.email.toLocaleLowerCase().trim();
    }

    @BeforeUpdate()
    checFieldBeforeUpdate(){
        this.checFieldBeforeInsert();
    }
    
}
