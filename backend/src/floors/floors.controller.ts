import { Controller, Get, Post, Body, Param, Patch, Delete, Req, Res, HttpCode} from '@nestjs/common';
import { FloorsService } from './floors.service';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';
import { Request, Response } from 'express';
import { HttpStatusCode } from 'axios';

@Controller('floors')
export class FloorsController {
  constructor(private  floorsService: FloorsService) {}

  @Post()
  async create(@Body() data: CreateFloorDto, @Req() req: Request, @Res() res: Response) {
    const floor = await this.floorsService.addFloor(data);
    res.status(HttpStatusCode.Created).json({floor})
  }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const floors = await this.floorsService.findAllFloors();
    res.status(HttpStatusCode.Found).json({floors})
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    const retrievedFloor = await this.floorsService.findFloorById(id);
    res.status(HttpStatusCode.Found).json({retrievedFloor})
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateFloorDto, @Req() req: Request, @Res() res: Response) {
    const updatedFloor = await this.floorsService.updateFloor(id, data);
    res.status(HttpStatusCode.Accepted).json({updatedFloor})
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    const deletedFloor = await this.floorsService.removeFloor(id);
    res.status(HttpStatusCode.Ok).json({deletedFloor})
  }
}