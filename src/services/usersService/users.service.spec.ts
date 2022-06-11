import { DatabaseModule } from '../../infra';
import { UsersService } from './users.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersServiceModule } from './users.service.module';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersServiceModule, DatabaseModule]
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
