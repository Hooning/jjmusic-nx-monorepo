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
import { SheetMusicService } from './sheet-music.service';
// import { CreateSheetMusicDto } from './dto/create-sheet-music.dto';
// import { UpdateSheetMusicDto } from './dto/update-sheet-music.dto';
// import { SheetMusicResponseDto } from './dto/sheet-music-response.dto';
// import { PriceResponseDto } from '../prices/dto/price-response.dto';
// import { CreatePriceDto } from '../prices/dto/create-price.dto';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { RolesGuard } from '../auth/guards/roles.guard';
// import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
// import { PaginationDto } from '../common/dto/pagination.dto';
// import { SheetMusicCategoriesDto } from './dto/sheet-music-categories.dto';

@ApiTags('sheet-music')
@Controller('sheet-music')
export class SheetMusicController {
  constructor(private readonly sheetMusicService: SheetMusicService) {}

  // @Get()
  // @ApiOperation({ summary: 'Get all sheet music' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Returns a list of sheet music',
  //   type: [SheetMusicResponseDto],
  // })
  // async findAll(
  //   @Query() paginationDto: PaginationDto,
  // ): Promise<SheetMusicResponseDto[]> {
  //   return this.sheetMusicService.findAll(paginationDto);
  // }

  // @Get(':id')
  // @ApiOperation({ summary: 'Get a sheet music by ID' })
  // @ApiParam({ name: 'id', description: 'Sheet music ID' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Returns a sheet music',
  //   type: SheetMusicResponseDto,
  // })
  // @ApiResponse({ status: 404, description: 'Sheet music not found' })
  // async findOne(@Param('id') id: string): Promise<SheetMusicResponseDto> {
  //   return this.sheetMusicService.findOne(id);
  // }

  // @Post()
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.INSTRUCTOR)
  // @ApiBearerAuth()
  // @ApiOperation({
  //   summary: 'Create a new sheet music (Admin and Instructor only)',
  // })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Sheet music created successfully',
  //   type: SheetMusicResponseDto,
  // })
  // async create(
  //   @Body() createSheetMusicDto: CreateSheetMusicDto,
  // ): Promise<SheetMusicResponseDto> {
  //   return this.sheetMusicService.create(createSheetMusicDto);
  // }

  // @Put(':id')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.INSTRUCTOR)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Update a sheet music (Admin and Instructor only)' })
  // @ApiParam({ name: 'id', description: 'Sheet music ID' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Sheet music updated successfully',
  //   type: SheetMusicResponseDto,
  // })
  // @ApiResponse({ status: 404, description: 'Sheet music not found' })
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateSheetMusicDto: UpdateSheetMusicDto,
  // ): Promise<SheetMusicResponseDto> {
  //   return this.sheetMusicService.update(id, updateSheetMusicDto);
  // }

  // @Delete(':id')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.INSTRUCTOR)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Delete a sheet music (Admin and Instructor only)' })
  // @ApiParam({ name: 'id', description: 'Sheet music ID' })
  // @ApiResponse({ status: 204, description: 'Sheet music deleted successfully' })
  // @ApiResponse({ status: 404, description: 'Sheet music not found' })
  // async remove(@Param('id') id: string): Promise<void> {
  //   return this.sheetMusicService.remove(id);
  // }

  // @Get(':id/prices')
  // @ApiOperation({ summary: 'Get sheet music prices' })
  // @ApiParam({ name: 'id', description: 'Sheet music ID' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Returns sheet music prices',
  //   type: [PriceResponseDto],
  // })
  // @ApiResponse({ status: 404, description: 'Sheet music not found' })
  // async getSheetMusicPrices(
  //   @Param('id') id: string,
  // ): Promise<PriceResponseDto[]> {
  //   return this.sheetMusicService.getSheetMusicPrices(id);
  // }

  // @Post(':id/prices')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.INSTRUCTOR)
  // @ApiBearerAuth()
  // @ApiOperation({
  //   summary: 'Add a price to a sheet music (Admin and Instructor only)',
  // })
  // @ApiParam({ name: 'id', description: 'Sheet music ID' })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Price added successfully',
  //   type: PriceResponseDto,
  // })
  // @ApiResponse({ status: 404, description: 'Sheet music not found' })
  // async addSheetMusicPrice(
  //   @Param('id') id: string,
  //   @Body() createPriceDto: CreatePriceDto,
  // ): Promise<PriceResponseDto> {
  //   return this.sheetMusicService.addSheetMusicPrice(id, createPriceDto);
  // }

  // @Put(':id/categories')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.INSTRUCTOR)
  // @ApiBearerAuth()
  // @ApiOperation({
  //   summary: 'Set sheet music categories (Admin and Instructor only)',
  // })
  // @ApiParam({ name: 'id', description: 'Sheet music ID' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Categories set successfully',
  //   type: SheetMusicResponseDto,
  // })
  // @ApiResponse({ status: 404, description: 'Sheet music not found' })
  // async setSheetMusicCategories(
  //   @Param('id') id: string,
  //   @Body() sheetMusicCategoriesDto: SheetMusicCategoriesDto,
  // ): Promise<SheetMusicResponseDto> {
  //   return this.sheetMusicService.setSheetMusicCategories(
  //     id,
  //     sheetMusicCategoriesDto.categoryIds,
  //   );
  // }
}
