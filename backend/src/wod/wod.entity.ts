import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('wods')
export class Wod {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text' })
    name: string;

    @Column({ type: 'text' })
    type: string;  // RFT, AMRAP, EMOM...

    @Column({ type: 'int', nullable: true })
    timeCap: number; 

    @Column({ type: 'text', nullable: true })
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
