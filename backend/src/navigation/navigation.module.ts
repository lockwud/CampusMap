import { Module } from '@nestjs/common';
import { LocationGateway } from './navigation.gateway';
import { PrismaService } from '../../prisma/prisma.service';
import { GoogleMapsService } from '../google-maps/google-maps.service';
import { PathfindingService } from '../path-finder/path-finder.service';

@Module({
  providers: [LocationGateway, PrismaService, GoogleMapsService, PathfindingService],
})
export class LocationModule {}
