import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(compression({ encodings: ['gzip', 'deflate'] }));
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('User Api  - Documentation')
    .setDescription('User api documentation')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
