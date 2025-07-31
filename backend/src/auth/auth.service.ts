import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async register(userData: User): Promise<User> {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        return this.usersService.createUser({ ...userData, password: hashedPassword });
    }

    async login(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) return null;
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return null;

        const payload = { sub: user.id, email: user.email, role: user.role };
        return { access_token: this.jwtService.sign(payload), user };
    }
}