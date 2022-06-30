import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { Role, User } from '@userApi/domain';
import { InfraModule, JwtRefreshStrategy, JwtStrategy, LocalStrategy } from '@userApi/infra';
import { AuthServiceModule } from './auth.service.module';

describe('AuthService', () => {
  let service: AuthService;
  let user: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[InfraModule, AuthServiceModule],
      providers: [AuthService, LocalStrategy, JwtStrategy, JwtRefreshStrategy],
    }).compile();

    service = module.get<AuthService>(AuthService);

    user = new User();
    user.username = 'admin';
    user.password = 'admin';
    user.roles = [Role.Admin];
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('invalid user information', () => {
    expect(service.validateUser('', '')).toBe(null);
  });

  it('valid user information', () => {
    expect(service.validateUser('admin', 'admin')).toBeDefined();
  });

  it('generate token', () => {
    expect(service.login(user)).toBeDefined();
  });

  it('profile information', () => {
    expect(service.login(user)).toBeDefined();
  });
});
