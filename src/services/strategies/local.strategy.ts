import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@userApi/infra';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private usersService: UsersService) {
    super();
  }

  public async validate(username: string, password: string): Promise<any> {
    const user = (await this.usersService.findOne(username)).get();

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    throw new UnauthorizedException();
  }
}
