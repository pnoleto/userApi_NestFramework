import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthServiceModule, JwtAuthModule } from '../../services';
import { AppController } from './app.controller';
import * as request from 'supertest';

describe('AppController', () => {
  let req = { user: { userId: 1, username: 'test', password: 'test', roles: ['admin'] } };
  let appController: AppController;
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AuthServiceModule,
        JwtAuthModule,
        ConfigModule
      ],
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = moduleFixture.get<AppController>(AppController);
    app = moduleFixture.createNestApplication();
  });

  describe('root', () => {
    it('should return "user information"', () => {
      expect(appController.profile(req)).toBe(req.user);
    });
  });

});
