import 'dotenv/config';
import {
  AppSettings,
  DatabaseSettings,
  JwtRefreshTokenSettings,
  JwtSettings,
  SwaggerSettings,
  ThrottleSettings,
} from '@userApi/domain';

const environmentVariables = process.env as any;

export const appSettings: AppSettings = JSON.parse(
  environmentVariables.appSettings,
) as AppSettings;

export const jwtSettings: JwtSettings = JSON.parse(
  environmentVariables.tokenConfig,
);

export const jwtRefreshTokenSettings: JwtRefreshTokenSettings = JSON.parse(
  environmentVariables.refreshTokenConfig,
);

export const throttleSettings: ThrottleSettings = JSON.parse(
  environmentVariables.ttlConfig,
);

export const databaseSettings: DatabaseSettings = JSON.parse(
  environmentVariables.postgresConfig,
);

export const swaggerSettings: SwaggerSettings = JSON.parse(
  environmentVariables.swaggerConfig,
);
