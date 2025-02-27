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
import { LessonsService } from './lessons.service';
// import { CreateLessonDto } from './dto/create-lesson.dto';
// import { UpdateLessonDto } from './dto/update-lesson.dto';
// import { LessonResponseDto } from './dto/lesson-response.dto';
// import { PriceResponseDto } from '../prices/dto/price-response.dto';
// import { CreatePriceDto } from '../prices/dto/create-price.dto';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { RolesGuard } from '../auth/guards/roles.guard';
// import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client/jjmusic-db-client';
// import { PaginationDto } from '../common/dto/pagination.dto';
// import { LessonCategoriesDto } from './dto/lesson-categories.dto';

@ApiTags('lessons')
@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  // @Get()
  // @ApiOperation({ summary: 'Get all lessons' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Returns a list of lessons',
  //   type: [LessonResponseDto],
  // })
  // async findAll(
  //   @Query() paginationDto: PaginationDto,
  // ): Promise<LessonResponseDto[]> {
  //   return this.lessonsService.findAll(paginationDto);
  // }

  // @Get(':id')
  // @ApiOperation({ summary: 'Get a lesson by ID' })
  // @ApiParam({ name: 'id', description: 'Lesson ID' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Returns a lesson',
  //   type: LessonResponseDto,
  // })
  // @ApiResponse({ status: 404, description: 'Lesson not found' })
  // async findOne(@Param('id') id: string): Promise<LessonResponseDto> {
  //   return this.lessonsService.findOne(id);
  // }

  // @Post()
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.INSTRUCTOR)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Create a new lesson (Admin and Instructor only)' })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Lesson created successfully',
  //   type: LessonResponseDto,
  // })
  // async create(
  //   @Body() createLessonDto: CreateLessonDto,
  // ): Promise<LessonResponseDto> {
  //   return this.lessonsService.create(createLessonDto);
  // }

  // @Put(':id')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.INSTRUCTOR)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Update a lesson (Admin and Instructor only)' })
  // @ApiParam({ name: 'id', description: 'Lesson ID' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Lesson updated successfully',
  //   type: LessonResponseDto,
  // })
  // @ApiResponse({ status: 404, description: 'Lesson not found' })
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateLessonDto: UpdateLessonDto,
  // ): Promise<LessonResponseDto> {
  //   return this.lessonsService.update(id, updateLessonDto);
  // }

  // @Delete(':id')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.INSTRUCTOR)
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Delete a lesson (Admin and Instructor only)' })
  // @ApiParam({ name: 'id', description: 'Lesson ID' })
  // @ApiResponse({ status: 204, description: 'Lesson deleted successfully' })
  // @ApiResponse({ status: 404, description: 'Lesson not found' })
  // async remove(@Param('id') id: string): Promise<void> {
  //   return this.lessonsService.remove(id);
  // }

  // @Get(':id/prices')
  // @ApiOperation({ summary: 'Get lesson prices' })
  // @ApiParam({ name: 'id', description: 'Lesson ID' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Returns lesson prices',
  //   type: [PriceResponseDto],
  // })
  // @ApiResponse({ status: 404, description: 'Lesson not found' })
  // async getLessonPrices(@Param('id') id: string): Promise<PriceResponseDto[]> {
  //   return this.lessonsService.getLessonPrices(id);
  // }

  // @Post(':id/prices')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.INSTRUCTOR)
  // @ApiBearerAuth()
  // @ApiOperation({
  //   summary: 'Add a price to a lesson (Admin and Instructor only)',
  // })
  // @ApiParam({ name: 'id', description: 'Lesson ID' })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Price added successfully',
  //   type: PriceResponseDto,
  // })
  // @ApiResponse({ status: 404, description: 'Lesson not found' })
  // async addLessonPrice(
  //   @Param('id') id: string,
  //   @Body() createPriceDto: CreatePriceDto,
  // ): Promise<PriceResponseDto> {
  //   return this.lessonsService.addLessonPrice(id, createPriceDto);
  // }

  // @Put(':id/categories')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.INSTRUCTOR)
  // @ApiBearerAuth()
  // @ApiOperation({
  //   summary: 'Set lesson categories (Admin and Instructor only)',
  // })
  // @ApiParam({ name: 'id', description: 'Lesson ID' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Categories set successfully',
  //   type: LessonResponseDto,
  // })
  // @ApiResponse({ status: 404, description: 'Lesson not found' })
  // async setLessonCategories(
  //   @Param('id') id: string,
  //   @Body() lessonCategoriesDto: LessonCategoriesDto,
  // ): Promise<LessonResponseDto> {
  //   return this.lessonsService.setLessonCategories(
  //     id,
  //     lessonCategoriesDto.categoryIds,
  //   );
  // }
}
