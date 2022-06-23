import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthServiceModule } from '../../services';
import { StrategiesModule } from 'src/services/strategies/strategies.module';

@Module({
  imports: [StrategiesModule, AuthServiceModule],
  controllers: [AppController],
})
export class AppControllerModule {}
