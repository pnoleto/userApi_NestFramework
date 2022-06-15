import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersServiceModule } from '../usersService/users.service.module';
import { AuthServiceModule } from './auth.service.module';
import { AuthService } from './auth.service';
import { Role } from '../../enums';
import { User } from 'src/models';

describe('AuthService', () => {
  let service: AuthService;
  let response: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthServiceModule, UsersServiceModule, JwtModule.register({})],
      providers: [],
    }).compile();

    service = module.get<AuthService>(AuthService);
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
    expect(
      service.login(new User('admin', 'admin', [Role.Admin])),
    ).toBeDefined();
  });

  it('profile information', () => {
    expect(
      service.login(new User('admin', 'admin', [Role.Admin])),
    ).toBeDefined();
  });
});
