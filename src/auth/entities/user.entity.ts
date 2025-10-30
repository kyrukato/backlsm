
import { ApiProperty } from "@nestjs/swagger";
import { MinLength } from "class-validator";
import { Grades } from "src/common/interface/grades";
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
    @ApiProperty({
        description: 'ID único de cada usuario del tipo UUID',
        example: '2104d802-027f-4ec6-838a-e7b7be5d570f',
        required: true,
        uniqueItems: true,
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        description: 'Correo electrónico de registro proporcionado por el usuario',
        example: 'ejemplo@ejemplo.com',
        required: true,
        uniqueItems: true,
    })
    @Column('text',{
        unique: true
    })
    email: string;

    @ApiProperty({
        description: 'Contraseña de acceso proporcionada por el usuario',
        example: 'abc123',
        required: true,
    })
    @Column('text',{
        select:false
    })
    password: string;

    @ApiProperty({
        description: 'Nombre del usuario que se está registrando',
        example: 'John Doe',
        required:true,
    })
    @Column('text')
    name: string;

    @ApiProperty({
        description: 'Indica si la cuenta del usuario sigue activa o si fue eliminada',
        example: true,
        required: true,
    })
    @Column('bool',{
        default: true
    })
    isActive: boolean;

    @ApiProperty({
        description: 'Rol al cual pertenece el usuario y restringe el acceso a endpoints en específico, por default al momento de registrarse el rol del usuario es \"user\"',
        example: 'user',
        enum: ['admin', 'user', 'guest'],
        default: 'user',
        required: true,
    })
    @Column('text',{
        default: 'user'
    })
    rol: string;

    @ApiProperty({
        description: 'Nombre o apodo con el cual el usuario se identifica',
        example: 'apodoUsuario',
        required: true,
    })
    @Column('text',{
        unique: true,
        nullable: false
    })
    @MinLength(3)
    nickname: string;

    @ApiProperty({
        description: 'Nivel de dominio de la LSM según el Marco Común Europeo de Referencia (MCER)',
        example: 'A1',
        enum: Grades,
        default: 'A1',
        required: true, 
    })
    @Column('text',{
        default: Grades.a1
    })
    grade: Grades;

    @ApiProperty({
        description: 'Nivel máximo alcanzado en el juego Recuerda la secuencia',
        example: 1,
        default: 1,
        required: true
    })
    @Column('int',{
        default: 1,
    })
    level_sequence: number;

    @ApiProperty({
        description: 'Nivel máximo alcanzado en el juego Memoria de señas',
        example: 1,
        default: 1,
        required: true
    })
    @Column('int',{
        default: 1,
    })
    level_memory: number;

    @ApiProperty({
        description: 'Nivel máximo alcanzado en el juego Adivina la seña',
        example: 1,
        default: 1,
        required: true
    })
    @Column('int',{
        default: 1,
    })
    level_guess: number;

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
