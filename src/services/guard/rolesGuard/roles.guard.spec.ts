import { Reflector } from '@nestjs/core';
import { RolesGuard } from './roles.guard';

describe('RolesGuard', () => {
  it('should be defined', () => {
    let reflector: Reflector = new Reflector();
    expect(new RolesGuard(reflector)).toBeDefined();
  });
});
