import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('exercises')
export class Exercise {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column({ length: 50, nullable: true })
    type?: string;

    @Column({ length: 50, nullable: true })
    equipment?: string;

    @Column({ default: false })
    isBodyweight: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
