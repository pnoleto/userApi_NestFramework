import { Role } from 'src/enums';
import { User } from './user';

describe('User', () => {
  it('should be defined', () => {
    expect(new User(1, 'test', 'test', [Role.Admin])).toBeDefined();
  });
});
