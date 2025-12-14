/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Enable CORS
  app.enableCors();

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Skill Mentorship Platform API')
    .setDescription('API documentation for Skill Mentorship Platform')
    .setVersion('1.0')
    .addTag('mentorship')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app as any, config);
  SwaggerModule.setup('api/docs', app as any, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(
    `📚 Swagger documentation is available at: http://localhost:${port}/${globalPrefix}/docs`
  );
}

bootstrap();


