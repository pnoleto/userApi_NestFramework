import { Test, TestingModule } from '@nestjs/testing';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtAuthModule } from './jwt-auth.module';

describe('JwtAuthService', () => {
  let service: JwtAuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[JwtAuthModule],
      providers: [JwtAuthGuard],
    }).compile();

    service = module.get<JwtAuthGuard>(JwtAuthGuard);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
