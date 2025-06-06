import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { IsPassword } from '@cornal-org/amazon-shared';

export class AuthRegisterRequestDto {
  @ApiProperty({
    example: faker.internet.email(),
    required: true,
    maxLength: 100,
  })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100)
  email: string;

  @ApiProperty({
    description: 'string password',
    example: `${faker.string.alphanumeric(5).toLowerCase()}${faker.string
      .alphanumeric(5)
      .toUpperCase()}@@!123`,
    required: true,
    maxLength: 50,
    minLength: 8,
  })
  @IsNotEmpty()
  @IsPassword()
  @MinLength(8)
  @MaxLength(50)
  password: string;
}
