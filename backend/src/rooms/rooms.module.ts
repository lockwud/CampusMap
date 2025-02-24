import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomController } from './rooms.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [RoomController],
  providers: [RoomsService, PrismaService],
})
export class RoomsModule {}
