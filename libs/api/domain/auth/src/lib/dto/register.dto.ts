import { RegisterDto as IRegisterDto } from '@jjmusic-nx-monorepo/shared/data-access';
import { IsEmail, IsString, IsBoolean, MinLength } from 'class-validator';

export class RegisterDto implements IRegisterDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  password!: string;

  @IsString()
  username?: string;

  @IsBoolean()
  termsAccepted!: boolean;

  @IsBoolean()
  privacyPolicyAccepted!: boolean;

  @IsBoolean()
  analyticsConsent!: boolean;
}
