import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HelperDateService } from '@cornal-org/amazon-shared';

@ApiTags('modules.hello')
@Controller({ version: VERSION_NEUTRAL, path: '/hello' })
export class HelloController {
  constructor(private readonly helperDateService: HelperDateService) {}

  //   @HelloDoc()
  //   @Response('hello.hello', { cached: true })
  @Get('/')
  async hello() {
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
