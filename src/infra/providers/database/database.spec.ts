import { Test, TestingModule } from '@nestjs/testing';
import { PostgresProvider } from './database.provider';

describe('Postgres', () => {
  let provider: PostgresProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostgresProvider],
    }).compile();

    provider = module.get<PostgresProvider>(PostgresProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
