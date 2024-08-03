import { Test, TestingModule } from '@nestjs/testing';
import { SalutationsController } from './salutations.controller';

describe('SalutationsController', () => {
  let controller: SalutationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalutationsController],
    }).compile();

    controller = module.get<SalutationsController>(SalutationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
