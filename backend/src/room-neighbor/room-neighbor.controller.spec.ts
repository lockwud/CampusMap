import { Test, TestingModule } from '@nestjs/testing';
import { RoomNeighborController } from './room-neighbor.controller';
import { RoomNeighborService } from './room-neighbor.service';

describe('RoomNeighborController', () => {
  let controller: RoomNeighborController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomNeighborController],
      providers: [RoomNeighborService],
    }).compile();

    controller = module.get<RoomNeighborController>(RoomNeighborController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
