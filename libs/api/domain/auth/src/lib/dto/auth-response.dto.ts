export class AuthResponseDto {
  success!: boolean;
  message!: string;
  userId?: string;

  // Optional: Include token if you authenticate users immediately after registration
  token?: string;

  // Optional: Include additional fields like expiresIn if using JWT
  expiresIn?: number;
}
