import * as compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(compression({ encodings: ['gzip', 'deflate'] }));
  app.use(helmet());
  await app.listen(30001);
}
bootstrap();
