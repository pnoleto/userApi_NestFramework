export const jwtConstants = {
  secret: 'secretKey',
  expiresIn: '5m',
};

export const jwtRefreshTokenConstants = {
  secret: 'secretKeyToRefreshToken',
  expiresIn: '15m'
};

export const ThrottleSettings = {
  ttl: 60,
  limit: 10
};

const IS_PUBLIC_KEY = 'isPublic';
