import {
  Doc,
  DocRequest,
  DocResponse,
  ENUM_DOC_REQUEST_BODY_TYPE,
} from '@cornal-org/amazon-shared';
import { applyDecorators, HttpStatus } from '@nestjs/common';
import { AuthRegisterRequestDto } from '../request/auth.register.request.dto';

export function AuthRegisterDoc(): MethodDecorator {
  return applyDecorators(
    Doc({ summary: 'Register' }),
    DocRequest({
      bodyType: ENUM_DOC_REQUEST_BODY_TYPE.JSON,
      dto: AuthRegisterRequestDto,
    }),
    DocResponse('auth.register', { httpStatus: HttpStatus.CREATED }),
  );
}
