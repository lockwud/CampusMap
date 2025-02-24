import { Controller, Get, Param, Body, Post, Req, Res } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { Request, Response } from 'express';
import { HttpStatusCode } from 'axios';

@Controller('rooms')
export class RoomController {
  constructor(private roomService: RoomsService) {}

  @Post('add')
  async saveRoom(@Body() data: CreateRoomDto, @Req() req: Request, @Res() res: Response){
    const addedRoom = await this.roomService.createRoom(data)
    res.status(HttpStatusCode.Created).json({addedRoom})

  }

  @Get()
  async getAllRooms(@Req() req: Request, @Res() res: Response){
    const retrievedRooms = await this.roomService.fetchAllRooms()
    res.status(HttpStatusCode.Found).json({
      retrievedRooms
    })
  }

  @Get('/:id')
  async getRoom(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    const retrievedRoom = await this.roomService.fetchRoomById(id)
    res.status(HttpStatusCode.Found).json({
      retrievedRoom
    })
  }
}