import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { UserResponseDto } from './dto/user-response.dto';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { RolesGuard } from '../auth/guards/roles.guard';
// import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client/jjmusic-db-client';
// import { PaginationDto } from '../common/dto/pagination.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // // @UseGuards(JwtAuthGuard, RolesGuard)
  // // @Roles(Role.ADMIN)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Get all users (Admin only)' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Returns a list of users',
  //   type: [UserResponseDto],
  // })
  // async findAll(
  //   @Query() paginationDto: PaginationDto,
  // ): Promise<UserResponseDto[]> {
  //   return this.usersService.findAll(paginationDto);
  // }

  // @Get(':id')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Get a user by ID (Admin only)' })
  // @ApiParam({ name: 'id', description: 'User ID' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Returns a user',
  //   type: UserResponseDto,
  // })
  // @ApiResponse({ status: 404, description: 'User not found' })
  // async findOne(@Param('id') id: string): Promise<UserResponseDto> {
  //   return this.usersService.findOne(id);
  // }

  // @Put(':id')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Update a user (Admin only)' })
  // @ApiParam({ name: 'id', description: 'User ID' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'User updated successfully',
  //   type: UserResponseDto,
  // })
  // @ApiResponse({ status: 404, description: 'User not found' })
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateUserDto: UpdateUserDto,
  // ): Promise<UserResponseDto> {
  //   return this.usersService.update(id, updateUserDto);
  // }

  // @Delete(':id')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Delete a user (Admin only)' })
  // @ApiParam({ name: 'id', description: 'User ID' })
  // @ApiResponse({ status: 204, description: 'User deleted successfully' })
  // @ApiResponse({ status: 404, description: 'User not found' })
  // async remove(@Param('id') id: string): Promise<void> {
  //   return this.usersService.remove(id);
  // }
}
