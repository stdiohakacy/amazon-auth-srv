import { registerAs } from '@nestjs/config';

export default registerAs(
  'app',
  (): Record<string, any> => ({
    name: process.env.AMAZON_AUTH_SRV_APP_NAME,
    env: process.env.AMAZON_AUTH_SRV_APP_ENV,
    timezone: process.env.AMAZON_AUTH_SRV_APP_TIMEZONE,
    version: '0.0.1',
    globalPrefix: '/api',

    http: {
      host: process.env.AMAZON_AUTH_SRV_HTTP_HOST,
      port: Number.parseInt(process.env.AMAZON_AUTH_SRV_HTTP_PORT),
    },
    urlVersion: {
      enable: process.env.AMAZON_AUTH_SRV_URL_VERSIONING_ENABLE === 'true',
      prefix: 'v',
      version: process.env.AMAZON_AUTH_SRV_URL_VERSION,
    },
  }),
);
