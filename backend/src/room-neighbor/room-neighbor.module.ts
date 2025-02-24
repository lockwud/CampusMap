import { Module } from '@nestjs/common';
import { RoomNeighborService } from './room-neighbor.service';
import { RoomNeighborController } from './room-neighbor.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [RoomNeighborController],
  providers: [RoomNeighborService, PrismaService],
})
export class RoomNeighborModule {}
