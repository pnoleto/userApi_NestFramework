import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@userApi/infra';
import { UserEntity } from '@userApi/domain';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private usersService: UsersService) {
    super();
  }

  public async validate(username: string, password: string): Promise<any> {
    const user: UserEntity = (await this.usersService.findOne(username)).get({
      plain: true,
    });

    if (user && user.document.password === password) {
      delete user.document.password;

      return user;
    }

    throw new UnauthorizedException();
  }
}
