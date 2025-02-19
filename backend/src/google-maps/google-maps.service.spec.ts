import { Test, TestingModule } from '@nestjs/testing';
import { GoolgleMapsService } from './google-maps.service';

describe('GoolgleMapsService', () => {
  let service: GoolgleMapsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoolgleMapsService],
    }).compile();

    service = module.get<GoolgleMapsService>(GoolgleMapsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
