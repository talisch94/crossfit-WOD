import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseController } from './exercise.controller';
import { Exercise } from './exercise.entity';
import { ExerciseService } from './exercise.service';

@Module({
    imports: [TypeOrmModule.forFeature([Exercise])],
    providers: [ExerciseService],
    controllers: [ExerciseController]
})
export class ExerciseModule { }
