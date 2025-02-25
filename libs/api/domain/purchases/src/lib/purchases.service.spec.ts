import { Test } from '@nestjs/testing';
import { PurchasesService } from './purchases.service';

describe('PurchasesService', () => {
  let service: PurchasesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PurchasesService],
    }).compile();

    service = module.get(PurchasesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
