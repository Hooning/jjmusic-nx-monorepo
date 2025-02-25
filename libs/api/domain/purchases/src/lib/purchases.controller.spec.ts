import { Test } from '@nestjs/testing';
import { PurchasesController } from './purchases.controller';
import { PurchasesService } from './purchases.service';

describe('PurchasesController', () => {
  let controller: PurchasesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PurchasesService],
      controllers: [PurchasesController],
    }).compile();

    controller = module.get(PurchasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
