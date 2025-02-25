import { Module } from '@nestjs/common';
import { SheetMusicController } from './sheet-music.controller';
import { SheetMusicService } from './sheet-music.service';

@Module({
  controllers: [SheetMusicController],
  providers: [SheetMusicService],
  exports: [SheetMusicService],
})
export class SheetMusicModule {}
