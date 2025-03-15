export interface RegisterDto {
  email: string;
  password: string;
  username?: string;
  termsAccepted: boolean;
  privacyPolicyAccepted: boolean;
  analyticsConsent: boolean;
}
