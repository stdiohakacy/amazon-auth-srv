import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [HelloModule, AuthModule],
})
export class FeatureModule {}
