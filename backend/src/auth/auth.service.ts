import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';
import { User } from 'src/users/user.entity';
import { UserRole } from 'src/enums/user-role.enum';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async register(userData: Partial<User>): Promise<User> {
        // const hashedPassword = await bcrypt.hash(userData.password, 10);
        // Always set the role to UserRole.USER (uppercase) if not provided
        const dataWithRole = {
            ...userData,
            role: UserRole.USER,
        };
        return this.usersService.createUser(dataWithRole);
    }

    async login(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) return null;
        // const isMatch = await bcrypt.compare(password, user.password);
        if (user.password !== password) return null;

        const payload = { sub: user.id, email: user.email, role: user.role };
        return { access_token: this.jwtService.sign(payload), user };
    }
}