import { Test } from '@nestjs/testing';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';

describe('LessonsController', () => {
  let controller: LessonsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [LessonsService],
      controllers: [LessonsController],
    }).compile();

    controller = module.get(LessonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
