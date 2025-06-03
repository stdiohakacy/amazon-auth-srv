import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import {
  ENUM_APP_ENVIRONMENT,
  ENUM_APP_TIMEZONE,
} from 'src/app/enums/app.enum';

import { ENUM_MESSAGE_LANGUAGE } from '@cornal-org/amazon-shared';

export class AppEnvDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  AMAZON_AUTH_SRV_APP_NAME: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsEnum(ENUM_APP_ENVIRONMENT)
  AMAZON_AUTH_SRV_APP_ENV: ENUM_APP_ENVIRONMENT;

  @IsString()
  @IsNotEmpty()
  @IsEnum(ENUM_MESSAGE_LANGUAGE)
  AMAZON_AUTH_SRV_APP_LANGUAGE: ENUM_MESSAGE_LANGUAGE;

  @IsString()
  @IsNotEmpty()
  @IsEnum(ENUM_APP_TIMEZONE)
  AMAZON_AUTH_SRV_APP_TIMEZONE: ENUM_APP_TIMEZONE;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  AMAZON_AUTH_SRV_HTTP_HOST: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  AMAZON_AUTH_SRV_HTTP_PORT: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  AMAZON_AUTH_SRV_MIDDLEWARE_CORS_ORIGIN: string;

  @IsBoolean()
  @IsNotEmpty()
  @Type(() => Boolean)
  AMAZON_AUTH_SRV_URL_VERSIONING_ENABLE: boolean;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  AMAZON_AUTH_SRV_URL_VERSION: number;
}
