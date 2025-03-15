import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
import { RegisterDto } from './dto/register.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaClient, private jwtService: JwtService) {}

  async register(registerDto: RegisterDto): Promise<AuthResponseDto> {
    const {
      email,
      password,
      username,
      termsAccepted,
      privacyPolicyAccepted,
      analyticsConsent,
    } = registerDto;

    // Validate required consents
    if (!termsAccepted || !privacyPolicyAccepted) {
      throw new BadRequestException(
        'You must accept the Terms of Service and Privacy Policy',
      );
    }

    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Create the user
    const newUser = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
        authProvider: 'local',
        role: 'STUDENT',
      },
    });

    // If using the separate UserConsent model approach
    if (termsAccepted) {
      await this.prisma.userConsent.create({
        data: {
          userId: newUser.id,
          consentType: 'terms',
          consentVersion: '0.1', // You'd want to make this dynamic
          consented: true,
        },
      });
    }

    if (privacyPolicyAccepted) {
      await this.prisma.userConsent.create({
        data: {
          userId: newUser.id,
          consentType: 'privacy',
          consentVersion: '0.1', // You'd want to make this dynamic
          consented: true,
        },
      });
    }

    if (analyticsConsent) {
      await this.prisma.userConsent.create({
        data: {
          userId: newUser.id,
          consentType: 'analytics',
          consentVersion: '0.1', // You'd want to make this dynamic
          consented: true,
        },
      });
    }

    // Generate JWT token (optional, if you want to auto-login after registration)
    const token = this.jwtService.sign({
      sub: newUser.id,
      email: newUser.email,
      role: newUser.role,
    });

    // Return success response
    return {
      success: true,
      message: 'User registered successfully',
      userId: newUser.id,
      token,
      expiresIn: 3600, // 1 hour expiration, adjust as needed
    };
  }
}
