import { DatabaseSettings } from '@userApi/domain';
import 'dotenv/config';

const environmentVariables = process.env as any;

export class AppSettings {
  port: number;
}

export const appSettings: AppSettings = {
  port: environmentVariables.PORT || 3000,
};

const tokenConfig = JSON.parse(environmentVariables.tokenConfig);

export class JwtSettings {
  secret: string;
  expiresIn: string;
}

export const jwtSettings: JwtSettings = {
  secret: tokenConfig.secret,
  expiresIn: tokenConfig.expiresIn,
};

const refreshTokenConfig = JSON.parse(environmentVariables.refreshTokenConfig);

export class JwtRefreshTokenSettings {
  secret: string;
  expiresIn: string;
}

export const jwtRefreshTokenSettings: JwtRefreshTokenSettings = {
  secret: refreshTokenConfig.secret,
  expiresIn: refreshTokenConfig.expiresIn,
};

const ttlConfig = JSON.parse(environmentVariables.ttlConfig);

export class ThrottleSettings {
  ttl: number;
  limit: number;
}

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

export class SwaggerSettings {
  title: string;
  description: string;
  version: string;
}

export const swaggerSettings: SwaggerSettings = {
  title: swaggerConfig.title,
  description: swaggerConfig.description,
  version: swaggerConfig.version,
};
