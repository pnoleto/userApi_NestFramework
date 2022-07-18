import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthServiceModule, ProfilesServiceModule } from '@userApi/infra';
import { ProfilesController } from './profiles.controller';
import { ProfilesControllerModule } from './profiles.controller.module';

describe('ProfilesController', () => {
  let controller: ProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ProfilesControllerModule,
        AuthServiceModule,
        JwtModule.register({}),
        ProfilesServiceModule,
      ],
      controllers: [ProfilesController],
    }).compile();

    controller = module.get<ProfilesController>(ProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
