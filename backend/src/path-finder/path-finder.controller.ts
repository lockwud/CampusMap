import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { PathfindingService } from './path-finder.service';
import { Request, Response } from 'express';
import { HttpStatusCode } from 'axios';

@Controller('pathfinding')
export class PathfindingController {
  constructor(private readonly pathfindingService: PathfindingService) {}

  @Get(':startRoomId/:targetRoomId')
  async getShortestPath(
    @Param('startRoomId') startRoomId: string, @Res() res: Response, @Req() req: Request,
    @Param('targetRoomId') targetRoomId: string,
  ) {
    const path =  this.pathfindingService.findShortestPath(startRoomId, targetRoomId);
    res.status(HttpStatusCode.Found).json({path})
  }



  
}
