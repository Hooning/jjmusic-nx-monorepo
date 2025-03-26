import { RegisterDto as IRegisterDto } from '@jjmusic-nx-monorepo/shared/data-access';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsBoolean, MinLength } from 'class-validator';

export class RegisterDto implements IRegisterDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the user',
  })
  @IsString()
  @MinLength(8)
  password!: string;

  @ApiProperty({
    example: 'user123',
    description: 'The username of the user',
  })
  @IsString()
  username?: string;

  @ApiProperty({
    example: true,
    description: 'Whether the user has accepted the terms of service',
  })
  @IsBoolean()
  termsAccepted!: boolean;

  @ApiProperty({
    example: true,
    description: 'Whether the user has accepted the privacy policy',
  })
  @IsBoolean()
  privacyPolicyAccepted!: boolean;

  @ApiProperty({
    example: false,
    description: 'Whether the user has accepted analytics tracking',
  })
  @IsBoolean()
  analyticsConsent!: boolean;
}
