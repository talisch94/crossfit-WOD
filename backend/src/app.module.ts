import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { WodModule } from './wod/wod.module';
import { dataSourceOptions } from './data-source';
import { ExerciseModule } from './exercise/exercise.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot(dataSourceOptions),
        WodModule,
        ExerciseModule,
        UsersModule,
        AuthModule
    ],
})
export class AppModule { }
