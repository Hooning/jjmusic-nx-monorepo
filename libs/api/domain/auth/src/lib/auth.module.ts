import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaModule } from '@jjmusic-nx-monorepo/api/configuration/jjmusic-prisma-schema';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [AuthService, JwtService],
  exports: [AuthService],
})
export class AuthModule {}
