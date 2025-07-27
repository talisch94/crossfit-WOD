import { Module } from '@nestjs/common';
import { WodModule } from './wod/wod.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './data-source';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot(dataSourceOptions),
        WodModule
    ],
})
export class AppModule { }
