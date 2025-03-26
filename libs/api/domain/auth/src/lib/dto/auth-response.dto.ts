import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({
    example: true,
    description: 'Indicates whether the request was successful',
  })
  success!: boolean;

  @ApiProperty({
    example: 'User registered successfully',
    description: 'The message returned to the user',
  })
  message!: string;

  @ApiProperty({
    example: 'user123',
    description: 'The ID of the user',
  })
  userId?: string;

  @ApiPropertyOptional({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIiwiaWF0IjoxNjI5MDQ3Njg0LCJleHAiOjE2MjkwNDc2ODV9.1JXg1yRv7L8ZK8f3q8Z1s9K3zv0z3J1v9jz9J1z3J1',
    description: 'The JWT token for the user',
  })
  // Optional: Include token if you authenticate users immediately after registration
  token?: string;

  @ApiPropertyOptional({
    example: 3600,
    description: 'The time in seconds until the token expires',
  })
  // Optional: Include additional fields like expiresIn if using JWT
  expiresIn?: number;
}
