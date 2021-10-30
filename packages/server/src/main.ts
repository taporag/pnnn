import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  Logger.log(`Server started on http://localhost:${3001}`, 'Server');
}
bootstrap();
