import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY_TOKEN } from '@userApi/infra';
import { User } from '@userApi/domain';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY_TOKEN)
    private usersRepository: typeof User,
  ) {}

  public findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({ where: { username } });
  }
}
