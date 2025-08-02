import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async createUser(data: Partial<User>) {
        const user = this.userRepository.create(data);
        return this.userRepository.save(user);
    }

    async findByEmail(email: string) {
        return this.userRepository.findOne({ where: { email } });
    }
}
