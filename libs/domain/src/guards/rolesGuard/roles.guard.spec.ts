import { Test, TestingModule } from '@nestjs/testing';
import { RolesGuardModule } from './roles-guard.module';
import { RolesGuard } from './roles.guard';

describe('RolesGuard', () => {
  let service: RolesGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[RolesGuardModule],
      providers: [RolesGuard],
    }).compile();

    service = module.get<RolesGuard>(RolesGuard);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});