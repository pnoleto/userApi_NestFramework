import { Module } from '@nestjs/common';
import { JwtRefreshTokenGuard } from './jwt-refresh-token.guard';

@Module({
  imports: [JwtRefreshTokenGuard],
})
export class JwtRefreshTokenModule {}
