import { Controller, Get } from '@nestjs/common';
import { Exercise } from './exercise.entity';
import { ExerciseService } from './exercise.service';

@Controller('exercises')
export class ExerciseController {
    constructor(private readonly exercisesService: ExerciseService) { }

    @Get()
    getAll() {
        console.log('arrive to controller !');
        return this.exercisesService.getAll();
    }
}
