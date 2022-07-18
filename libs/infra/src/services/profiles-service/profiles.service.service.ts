import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Profile, ProfileEntity } from '@userApi/domain';
import { PROFILES_REPOSITORY_TOKEN } from '@userApi/infra';

@Injectable()
export class ProfilesService {
  constructor(
    @Inject(PROFILES_REPOSITORY_TOKEN)
    private profilesRepository: typeof ProfileEntity,
  ) {}

  public async findOne(profileName: string): Promise<ProfileEntity> {
    const request = this.profilesRepository.findOne({
      where: {
        document: {
          name: profileName,
        },
      },
    });

    return request;
  }

  public async save(profile: Profile) {
    const request = await this.profilesRepository.create<ProfileEntity>({
      document: profile,
    });

    return request;
  }

  public async update(profileId: number, newProfile: Profile) {
    const request = await this.profilesRepository.findByPk(profileId);

    if (!request) throw new NotFoundException('Entity not found');

    request.document = newProfile;
    request.save();

    return request;
  }

  public async delete(profileId: number) {
    const request = await this.profilesRepository.findByPk(profileId);

    if (!request) throw new NotFoundException('Entity not found');

    request.destroy();

    return request;
  }
}
