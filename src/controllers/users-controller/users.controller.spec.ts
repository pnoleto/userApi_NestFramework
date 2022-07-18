import { Test, TestingModule } from '@nestjs/testing';
import { UsersControllerModule } from './users.controller.module';
import { UsersController } from './users.controller';
import { AuthService, AuthServiceModule } from '@userApi/infra';
import { JwtModule } from '@nestjs/jwt';

describe('userController', () => {
  let req = {
    user: {
      userId: 1,
      username: 'test',
      password: 'test',
    },
  };
  let appController: UsersController;
  let response: any;
  let app: any;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        UsersControllerModule,
        AuthServiceModule,
        JwtModule.register({}),
      ],
      controllers: [UsersController],
      providers: [AuthService],
    }).compile();

    appController = moduleFixture.get<UsersController>(UsersController);
    app = moduleFixture.createNestApplication();
  });

  it('should return "user information"', () => {
    expect(appController.profile(req)).toBe(req.user);
  });

  it('should return "token information"', () => {
    response = appController.login(req);
    expect(response.access_token).not.toBeUndefined();
    expect(response.refresh_token).not.toBeUndefined();
  });

  it('should return "refresh token"', () => {
    expect(appController.refreshToken(response)).not.toBeUndefined();
  });
});
