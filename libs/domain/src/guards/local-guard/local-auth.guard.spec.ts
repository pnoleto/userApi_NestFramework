import { Test, TestingModule } from '@nestjs/testing';
import { LocalAuthGuardModule } from './local-auth-guard.module';
import { LocalAuthGuard } from './local-auth.guard';

describe('LocalAuthGuard', () => {
  let service: LocalAuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[LocalAuthGuardModule],
      providers: [LocalAuthGuard],
    }).compile();

    service = module.get<LocalAuthGuard>(LocalAuthGuard);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});