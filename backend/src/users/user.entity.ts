import { UserRole } from '../enums/user-role.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string; // נשמור את זה מוצפן

    @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
    role: UserRole;
}
