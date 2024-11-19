import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dictionary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text',{
        unique:true,
    })
    name: string;

    @Column('text')
    description: string;

    @Column('text')
    imageURL: string;

    @Column('text')
    class: string;
}
