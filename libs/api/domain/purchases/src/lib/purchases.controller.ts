import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { PurchasesService } from './purchases.service';
// import { CreatePurchaseDto } from './dto/create-purchase.dto';
// import { PurchaseResponseDto } from './dto/purchase-response.dto';
// import { UpdatePurchaseStatusDto } from './dto/update-purchase-status.dto';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { RolesGuard } from '../auth/guards/roles.guard';
// import { Roles } from '../auth/decorators/roles.decorator';
import { Role, Status } from '@prisma/client/jjmusic-db-client';
// import { PaginationDto } from '../common/dto/pagination.dto';

@ApiTags('purchases')
@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  // @Post()
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Create a new purchase' })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Purchase created successfully',
  //   type: PurchaseResponseDto,
  // })
  // @ApiResponse({ status: 400, description: 'Bad request' })
  // async create(
  //   @Request() req,
  //   @Body() createPurchaseDto: CreatePurchaseDto,
  // ): Promise<PurchaseResponseDto> {
  //   return this.purchasesService.create(req.user.id, createPurchaseDto);
  // }

  // @Get('my')
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Get current user purchases' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Returns a list of user purchases',
  //   type: [PurchaseResponseDto],
  // })
  // async findMyPurchases(
  //   @Request() req,
  //   @Query() paginationDto: PaginationDto,
  // ): Promise<PurchaseResponseDto[]> {
  //   return this.purchasesService.findUserPurchases(req.user.id, paginationDto);
  // }

  // @Get('user/:userId')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Get user purchases (Admin only)' })
  // @ApiParam({ name: 'userId', description: 'User ID' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Returns a list of user purchases',
  //   type: [PurchaseResponseDto],
  // })
  // @ApiResponse({ status: 404, description: 'User not found' })
  // async findUserPurchases(
  //   @Param('userId') userId: string,
  //   @Query() paginationDto: PaginationDto,
  // ): Promise<PurchaseResponseDto[]> {
  //   return this.purchasesService.findUserPurchases(userId, paginationDto);
  // }

  // @Get()
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Get all purchases (Admin only)' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Returns a list of all purchases',
  //   type: [PurchaseResponseDto],
  // })
  // async findAll(
  //   @Query() paginationDto: PaginationDto,
  // ): Promise<PurchaseResponseDto[]> {
  //   return this.purchasesService.findAll(paginationDto);
  // }

  // @Get(':id')
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Get a purchase by ID' })
  // @ApiParam({ name: 'id', description: 'Purchase ID' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Returns a purchase',
  //   type: PurchaseResponseDto,
  // })
  // @ApiResponse({ status: 404, description: 'Purchase not found' })
  // async findOne(
  //   @Request() req,
  //   @Param('id') id: string,
  // ): Promise<PurchaseResponseDto> {
  //   // Check if user is admin or the purchase belongs to the user
  //   if (req.user.role === Role.ADMIN) {
  //     return this.purchasesService.findOne(id);
  //   }
  //   return this.purchasesService.findOneForUser(id, req.user.id);
  // }

  // @Put(':id/status')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Update purchase status (Admin only)' })
  // @ApiParam({ name: 'id', description: 'Purchase ID' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Purchase status updated successfully',
  //   type: PurchaseResponseDto,
  // })
  // @ApiResponse({ status: 404, description: 'Purchase not found' })
  // async updateStatus(
  //   @Param('id') id: string,
  //   @Body() updatePurchaseStatusDto: UpdatePurchaseStatusDto,
  // ): Promise<PurchaseResponseDto> {
  //   return this.purchasesService.updateStatus(
  //     id,
  //     updatePurchaseStatusDto.status,
  //   );
  // }
}
