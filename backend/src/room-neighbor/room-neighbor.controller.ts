import { Controller, Get, Post, Body, Param, Patch, Delete, Req, Res} from '@nestjs/common';
import { RoomNeighborService } from './room-neighbor.service';
import { CreateRoomNeighborDto } from './dto/create-room-neighbor.dto';
import { UpdateRoomNeighborDto } from './dto/update-room-neighbor.dto';
import { Request, Response } from 'express';
import { HttpStatusCode } from 'axios';

@Controller('room-neighbors')
export class RoomNeighborController {
  constructor(private readonly roomNeighborService: RoomNeighborService) {}

  @Post('add')
  async create(@Body() data: CreateRoomNeighborDto, @Req() req: Request, @Res() res: Response) {
    const neighbor = await this.roomNeighborService.createRoomNeighbor(data);
    res.status(HttpStatusCode.Created).json({neighbor})
  }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const fetchedNeighbors = await  this.roomNeighborService.findAllNeighbors();
    res.status(HttpStatusCode.Found).json({fetchedNeighbors})
    
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    const fetchedNeighbor = await this.roomNeighborService.findRoomNeighborById(id);
    res.status(HttpStatusCode.Found).json({fetchedNeighbor})
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateRoomNeighborDto, @Req() req: Request, @Res() res: Response) {
    const updatedRoomNeighbor = await this.roomNeighborService.updateRoomNeighbors(id, data);
    res.status(HttpStatusCode.Ok).json({updatedRoomNeighbor})
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    const deletedNeigbor = await this.roomNeighborService.removeRoomNeighbors(id);
    res.status(HttpStatusCode.Ok).json({deletedNeigbor})
  }
}
