import { Test, TestingModule } from '@nestjs/testing';
import { QoutesController } from './qoutes.controller';
import { AuthGuard } from '../auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { QoutesService } from './qoutes.service';

describe('QoutesController', () => {
  let controller: QoutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QoutesController],
      providers: [
        AuthGuard,
        { provide: JwtService, useValue: {} }, 
        { provide: QoutesService, useValue: {} }, 
      ],
    }).compile();

    controller = module.get<QoutesController>(QoutesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
