import { JwtRefreshTokenGuard } from './jwt-refresh-token.guard';

describe('JwtRefreshTokenGuardGuard', () => {
  it('should be defined', () => {
    expect(new JwtRefreshTokenGuard()).toBeDefined();
  });
});
