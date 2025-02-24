import { Module } from '@nestjs/common';
import { RoomNeighborService } from './room-neighbor.service';
import { RoomNeighborController } from './room-neighbor.controller';

@Module({
  controllers: [RoomNeighborController],
  providers: [RoomNeighborService],
})
export class RoomNeighborModule {}
