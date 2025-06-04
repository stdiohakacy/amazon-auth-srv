import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  HelperDateService,
  Response,
  ResponseInterface,
} from '@cornal-org/amazon-shared';
import { HelloResponseDto } from '../dtos/response/hello.response.dto';
import { HelloDoc } from '../docs/hello.doc';

@ApiTags('modules.hello')
@Controller({ version: VERSION_NEUTRAL, path: '/hello' })
export class HelloController {
  constructor(private readonly helperDateService: HelperDateService) {}

  @HelloDoc()
  @Response('hello.hello')
  @Get('/')
  async hello(): Promise<ResponseInterface<HelloResponseDto>> {
    const today = this.helperDateService.create();
    return {
      data: {
        date: today,
        format: this.helperDateService.formatToIso(today),
        timestamp: this.helperDateService.getTimestamp(today),
      },
    };
  }
}
