import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomController } from './rooms.controller';

@Module({
  controllers: [RoomController],
  providers: [RoomsService],
})
export class RoomsModule {}
