import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('JJMusic API')
    .setDescription('The JJMusic API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  try {
    const outputPath = path.resolve(process.cwd(), 'openapi.json');
    fs.writeFileSync(outputPath, JSON.stringify(document, null, 2), {
      encoding: 'utf8',
    });
    Logger.log(`OpenAPI spec saved to ${outputPath}`, 'OpenAPI');
  } catch (error) {
    Logger.error(`Failed to save OpenAPI spec: ${error.message}`, 'OpenAPI');
  }

  // Serve Swagger UI
  SwaggerModule.setup('api', app, document);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
