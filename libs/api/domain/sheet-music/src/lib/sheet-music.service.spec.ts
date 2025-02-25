import { Test } from '@nestjs/testing';
import { SheetMusicService } from './sheet-music.service';

describe('SheetMusicService', () => {
  let service: SheetMusicService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SheetMusicService],
    }).compile();

    service = module.get(SheetMusicService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
