import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { appSettings, swaggerSettings } from './consts/constants';
import * as compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(compression({ encodings: ['gzip', 'deflate'] }));
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle(swaggerSettings.title)
    .setDescription(swaggerSettings.description)
    .setVersion(swaggerSettings.version)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(appSettings.port);
}
bootstrap();
