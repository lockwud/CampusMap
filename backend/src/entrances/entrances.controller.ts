import { Controller, Get, Param, Post, Req, Res, Body } from '@nestjs/common';
import { EntrancesService } from './entrances.service';
import { Request, Response } from 'express';
import { HttpStatusCode } from 'axios';
import { CreateEntranceDto } from './dto/create-entrance.dto';

@Controller('entrances')
export class EntranceController {
  constructor(private entranceService : EntrancesService) {}

  @Post('add')
  async addEntrance(@Body() data: CreateEntranceDto, @Req() req: Request, @Res() res: Response){
    const addedEntrance = await this.entranceService.addEntrance(data)
    res.status(HttpStatusCode.Created).json({addedEntrance})
  }

  @Get()
  async getAllEntrances(@Req() req: Request, @Res() res: Response){
    const retrievedEntrance = await this.entranceService.findAllEntrances()
    res.status(HttpStatusCode.Found).json({retrievedEntrance})

  }

  @Get('/:id')
  async getEntrance(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    const fetchedEntrance = await this.entranceService.findEntranceById(id)
    res.status(HttpStatusCode.Found).json({fetchedEntrance})
  }

}