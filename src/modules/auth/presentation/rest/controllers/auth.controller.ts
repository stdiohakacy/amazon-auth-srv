import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from '@cornal-org/amazon-shared';
import { AuthRegisterDoc } from '../dtos/docs/auth.doc';

@ApiTags('modules.auth')
@Controller({ version: '1', path: '/auth' })
export class AuthController {
  constructor() {}

  @AuthRegisterDoc()
  @Response('auth.register')
  @HttpCode(HttpStatus.OK)
  @Post('/register')
  async register() {}
}
