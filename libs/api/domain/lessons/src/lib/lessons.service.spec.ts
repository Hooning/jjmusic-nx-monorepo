import { Test } from '@nestjs/testing';
import { LessonsService } from './lessons.service';

describe('LessonsService', () => {
  let service: LessonsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [LessonsService],
    }).compile();

    service = module.get(LessonsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
