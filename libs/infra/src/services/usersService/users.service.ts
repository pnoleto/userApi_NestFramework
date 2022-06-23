import { Inject, Injectable } from '@nestjs/common';
import { User } from '@userApi/domain';
import { USERS_REPOSITORY_TOKEN } from '../../consts';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY_TOKEN)
    private usersRepository: typeof User,
  ) {}

  public findOne(username: string): Promise<User> {
    const request = this.usersRepository.findOne({
      where: { username },
    });

    return request;
  }
}
