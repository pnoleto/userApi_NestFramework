import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { USERS_REPOSITORY_TOKEN } from '../../consts';
import { User, UserEntity } from '@userApi/domain';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY_TOKEN)
    private usersRepository: typeof UserEntity,
  ) {}

  public async findOne(username: string): Promise<UserEntity> {
    const request = await this.usersRepository.findOne({
      where: {
        document: {
          username: username,
        },
      },
    });

    return request;
  }

  public async save(user: User): Promise<UserEntity> {
    const request = await this.usersRepository.create<UserEntity>({
      document: user,
    });

    return request;
  }

  public async update(userId: number, newUser: User): Promise<UserEntity> {
    const request = await this.usersRepository.findByPk(userId);

    if (!request) throw new NotFoundException('Entity not found');

    request.document = newUser;
    request.save();

    return request;
  }

  public async delete(userId: number): Promise<UserEntity> {
    const request = await this.usersRepository.findByPk(userId);

    if (!request) throw new NotFoundException('Entity not found');

    request.destroy();

    return request;
  }
}
