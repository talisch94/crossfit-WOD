import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { WodModule } from './wod/wod.module';
import { dataSourceOptions } from './data-source';
import { ExerciseModule } from './exercise/exercise.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot(dataSourceOptions),
        WodModule,
        ExerciseModule
    ],
})
export class AppModule { }
