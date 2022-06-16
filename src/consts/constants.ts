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

export const appSettings: AppSettings = {
  port: environmentVariables.PORT || 3000,
};

const tokenConfig = JSON.parse(environmentVariables.tokenConfig);

export const jwtSettings: JwtSettings = {
  secret: tokenConfig.secret,
  expiresIn: tokenConfig.expiresIn
};

const refreshTokenConfig = JSON.parse(environmentVariables.refreshTokenConfig);

export const jwtRefreshTokenSettings: JwtRefreshTokenSettings = {
  secret: refreshTokenConfig.secret,
  expiresIn: refreshTokenConfig.expiresIn
};

const ttlConfig = JSON.parse(environmentVariables.ttlConfig);

export const throttleSettings: ThrottleSettings = {
  ttl: ttlConfig.ttl,
  limit: ttlConfig.limit,
};

const databaseConfig = JSON.parse(environmentVariables.postgresConfig);

export const databaseSettings: DatabaseSettings = {
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
  schema: databaseConfig.schema,
};

const swaggerConfig = JSON.parse(environmentVariables.swaggerConfig);

export const swaggerSettings: SwaggerSettings = {
  title: swaggerConfig.title,
  description: swaggerConfig.description,
  version: swaggerConfig.version,
};
