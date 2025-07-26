import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wod } from './wod.entity';
import { Repository } from 'typeorm';
import { CreateWodDto } from './dto/create-wod.dto';
import { UpdateWodDto } from './dto/update-wod.dto';

@Injectable()
export class WodService {
    constructor(
        @InjectRepository(Wod)
        private readonly wodRepository: Repository<Wod>,
    ) { }
    
    async create(createWodDto: CreateWodDto): Promise<Wod> {
        console.log('Creating Wod:', createWodDto);
        const wod = this.wodRepository.create(createWodDto);
        return this.wodRepository.save(wod);
    }

    async getAll(): Promise<Wod[]> {
        return this.wodRepository.find();
    }

    findOne(id: string) {
        return this.wodRepository.findOneBy({ id });
    }

    async update(id: string, updateWodDto: UpdateWodDto) {
        await this.wodRepository.update(id, updateWodDto);
        return this.findOne(id);
    }

    async remove(id: string) {
        const wod = await this.findOne(id);
        if (wod) {
            return this.wodRepository.remove(wod);
        }
    }

}
