import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersServiceModule } from '../usersService/users.service.module';
import { JwtStrategy, JwtRefreshStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({}), PassportModule, UsersServiceModule],
  providers: [AuthService, LocalStrategy, JwtStrategy, JwtRefreshStrategy],
  exports: [AuthService],
})
export class AuthServiceModule {}
