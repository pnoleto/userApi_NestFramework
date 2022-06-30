import { Test, TestingModule } from '@nestjs/testing';
import { JwtRefreshTokenGuard } from './jwt-refresh-token.guard';

describe('JwtRefreshTokenGuard', () => {
  let service: JwtRefreshTokenGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[JwtRefreshTokenGuard],
      providers: [JwtRefreshTokenGuard],
    }).compile();

    service = module.get<JwtRefreshTokenGuard>(JwtRefreshTokenGuard);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});