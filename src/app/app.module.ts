import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configs from 'configs';
import { FeatureModule } from 'src/modules/feature.module';
import { ShareModule } from '@cornal-org/amazon-shared';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      expandVariables: false,
    }),
    ShareModule,
    FeatureModule,
  ],
})
export class AppModule {}
