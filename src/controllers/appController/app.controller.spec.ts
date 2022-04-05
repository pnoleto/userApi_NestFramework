import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppControllerModule } from './app.controller.module';
import { AuthServiceModule, JwtAuthModule } from '../../services';
import { AppController } from './app.controller';
import { Role } from '../../enums';

describe('AppController', () => {
  let req = { user: { userId: 1, username: 'test', password: 'test', roles: [Role.Admin] } };
  let appController: AppController;
  let response: any;
  let app: any;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppControllerModule,
        AuthServiceModule,
        JwtAuthModule,
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: [`${__dirname}/configs/${process.env.NODE_ENV}.env`],
        })
      ],
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = moduleFixture.get<AppController>(AppController);
    app = moduleFixture.createNestApplication();
  });

  it('should return "user information"', () => {
    expect(appController.profile(req)).toBe(req.user);
  });

  it('should return "token information"', () => {
    response = appController.login(req)
    expect(response.access_token).not.toBeUndefined();
    expect(response.refresh_token).not.toBeUndefined();
  });

  it('should return "refresh token"', () => {
    expect(appController.refreshToken(response)).not.toBeUndefined();
  });

});
