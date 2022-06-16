import { Reflector } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { RolesGuardModule } from 'src/services';
import { RolesGuard } from './roles.guard';

beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [
      RolesGuardModule
    ],
    providers: [],
  }).compile();
});

describe('RolesGuard', () => {
  it('should be defined', () => {
    let reflector: Reflector = new Reflector();
    expect(new RolesGuard(reflector)).toBeDefined();
  });
});
