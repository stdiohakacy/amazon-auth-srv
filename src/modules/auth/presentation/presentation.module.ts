import { Module } from '@nestjs/common';
import { AuthController } from './rest/controllers/auth.controller';

@Module({
  controllers: [AuthController],
})
export class PresentationModule {}
