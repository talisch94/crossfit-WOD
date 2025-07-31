import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { seedExercises } from './seeds/seed-exercises';
import { DataSource } from 'typeorm';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    
    const dataSource = app.get(DataSource);
    await seedExercises(dataSource);

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
