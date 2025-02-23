import { Controller, Get, Query } from '@nestjs/common';
import { GoogleMapsService } from './google-maps.service';

@Controller('maps')
export class GoogleMapsController {
  constructor(private readonly googleMapsService: GoogleMapsService) {}

  @Get('route')
  async getRoute(
    @Query('start') start: string,
    @Query('end') end: string,
    @Query('mode') mode: 'walking' | 'driving' = 'walking',
  ) {
    return this.googleMapsService.getRoute(start, end, mode);
  }
}
