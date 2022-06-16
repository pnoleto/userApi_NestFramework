import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UsersServiceModule } from '../usersService/users.service.module';
import { JwtStrategy, JwtRefreshStrategy, LocalStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({}), PassportModule, UsersServiceModule],
  providers: [AuthService, LocalStrategy, JwtStrategy, JwtRefreshStrategy],
  exports: [AuthService],
})
export class AuthServiceModule {}
