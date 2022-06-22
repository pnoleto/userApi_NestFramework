import { Test, TestingModule } from '@nestjs/testing';
import { DomainModule } from '@userApi/domain';
import { InfraModule } from './infra.module';
import { InfraService } from './infra.service';

describe('InfraService', () => {
  let service: InfraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[DomainModule, InfraModule],
      providers: [InfraService],
    }).compile();

    service = module.get<InfraService>(InfraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
