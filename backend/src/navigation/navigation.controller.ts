import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { PathfindingService } from '../path-finder/path-finder.service';
import { GoogleMapsService } from '../google-maps/google-maps.service';

@Controller('navigation')
export class NavigationController {
  constructor(
    private readonly pathfindingService: PathfindingService,
    private readonly googleMapsService: GoogleMapsService
  ) {}

  @Get('/indoor')
  async getIndoorRoute(@Query('startRoomId') startRoomId: string, @Query('targetRoomId') targetRoomId: string) {
    if (!startRoomId || !targetRoomId) {
      throw new BadRequestException('Both startRoomId and targetRoomId are required.');
    }
    return await this.pathfindingService.findShortestPath(startRoomId, targetRoomId);
  }

  @Get('/outdoor')
  async getOutdoorRoute(@Query('start') start: string, @Query('end') end: string) {
    if (!start || !end) {
      throw new BadRequestException('Both start and end coordinates are required.');
    }
    return await this.googleMapsService.getRoute(start, end);
  }
}