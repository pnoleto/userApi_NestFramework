import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserEntity } from '@userApi/domain';
import {
  InfraModule,
  JwtRefreshStrategy,
  JwtStrategy,
  LocalStrategy,
} from '@userApi/infra';
import { AuthServiceModule } from './auth.service.module';

describe('AuthService', () => {
  let service: AuthService;
  let user = new UserEntity();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [InfraModule, AuthServiceModule],
      providers: [AuthService, LocalStrategy, JwtStrategy, JwtRefreshStrategy],
    }).compile();

    service = module.get<AuthService>(AuthService);

    user.document.username = 'admin';
    user.document.password = 'admin';
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('generate token', () => {
    expect(service.generateTokenFromLogin(user)).toBeDefined();
  });

  it('profile information', () => {
    expect(service.generateTokenFromLogin(user)).toBeDefined();
  });
});
