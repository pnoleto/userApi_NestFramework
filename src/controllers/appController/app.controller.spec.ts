import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppModule } from '../../app.module';
import { AuthModule } from '../../services/authService/auth.module';

describe('AppController', () => {
  let req = { user: { userId: 1, username: 'test', password: 'test', roles: ['admin'] } };
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        AuthModule,
      ],
      controllers: [AppController],
      providers: [
        AppModule
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.profile(req)).toBe(req.user);
    });
  });
});
