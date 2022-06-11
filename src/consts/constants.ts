import 'dotenv/config';

const IS_PUBLIC_KEY = 'isPublic';

const environmentVariables = process.env as any;

export const AppConfig = {
  port: environmentVariables.PORT || 3000,
};

const tokenConfig = JSON.parse(environmentVariables.tokenConfig);

export const jwtConstants = {
  secret: tokenConfig.secret,
  expiresIn: tokenConfig.expiresIn,
};

const refreshTokenConfig = JSON.parse(environmentVariables.refreshTokenConfig);

export const jwtRefreshTokenConstants = {
  secret: refreshTokenConfig.secret,
  expiresIn: refreshTokenConfig.expiresIn,
};

const ttlConfig = JSON.parse(environmentVariables.ttlConfig);

export const ThrottleSettings = {
  ttl: ttlConfig.ttl,
  limit: ttlConfig.limit,
};

const postgresConfig = JSON.parse(environmentVariables.postgresConfig);

export const PostgresSettings = {
  host: postgresConfig.host,
  port: postgresConfig.port,
  username: postgresConfig.username,
  password: postgresConfig.password,
  database: postgresConfig.database,
  schema: postgresConfig.schema,
};

const swaggerConfig = JSON.parse(environmentVariables.swaggerConfig);

export const SwaggerSettings = {
  title: swaggerConfig.title,
  description: swaggerConfig.description,
  version: swaggerConfig.version,
};

console.log(SwaggerSettings);

