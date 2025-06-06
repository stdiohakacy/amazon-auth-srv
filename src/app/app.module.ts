import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configs from 'configs';
import { FeatureModule } from 'src/modules/feature.module';
import {
  CornalMessageModule,
  CornalShareModule,
} from '@cornal-org/amazon-shared';
import path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      expandVariables: false,
    }),
    CornalShareModule,
    CornalMessageModule.forRoot({
      languagePath: path.join(__dirname, '../languages'),
      availableLanguages: ['en'],
      fallbackLanguage: 'en',
    }),
    FeatureModule,
  ],
})
export class AppModule {}
