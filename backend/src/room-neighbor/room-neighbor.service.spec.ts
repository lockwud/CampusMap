import { Test, TestingModule } from '@nestjs/testing';
import { RoomNeighborService } from './room-neighbor.service';

describe('RoomNeighborService', () => {
  let service: RoomNeighborService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomNeighborService],
    }).compile();

    service = module.get<RoomNeighborService>(RoomNeighborService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
