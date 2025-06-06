import { applyDecorators } from '@nestjs/common';
import { Doc, DocResponse } from '@cornal-org/amazon-shared';
import { HelloResponseDto } from '../dtos/response/hello.response.dto';

export function HelloDoc(): MethodDecorator {
  return applyDecorators(
    Doc({ summary: 'hello api' }),
    DocResponse<HelloResponseDto>('app.hello', { dto: HelloResponseDto }),
  );
}
