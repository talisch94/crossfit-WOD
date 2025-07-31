import { Module } from '@nestjs/common';
import { WodService } from './wod.service';
import { WodController } from './wod.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wod } from './wod.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Wod])],
    providers: [WodService],
    controllers: [WodController]
})
export class WodModule { }
