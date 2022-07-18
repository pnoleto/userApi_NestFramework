import { Test, TestingModule } from '@nestjs/testing';
import { ResourceGuardModule } from './resource-guard.module';
import { ResourceGuard } from './resource.guard';

describe('RolesGuard', () => {
  let service: ResourceGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[ResourceGuardModule],
      providers: [ResourceGuard],
    }).compile();

    service = module.get<ResourceGuard>(ResourceGuard);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});