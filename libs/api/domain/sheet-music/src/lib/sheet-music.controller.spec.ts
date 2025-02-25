import { Test } from '@nestjs/testing';
import { SheetMusicController } from './sheet-music.controller';
import { SheetMusicService } from './sheet-music.service';

describe('SheetMusicController', () => {
  let controller: SheetMusicController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SheetMusicService],
      controllers: [SheetMusicController],
    }).compile();

    controller = module.get(SheetMusicController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
