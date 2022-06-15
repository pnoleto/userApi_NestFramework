import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../models';

@Injectable()
export class UsersService {
  constructor(
    @Inject('usersRepository')
    private usersRepository: typeof User,
  ) {}

  public async findOne(username: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { username } });
  }
}
