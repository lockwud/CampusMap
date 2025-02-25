import { Module } from '@nestjs/common';
import { LocationGateway } from './navigation.gateway';
import { PrismaService } from '../../prisma/prisma.service';
import { GoogleMapsService } from '../google-maps/google-maps.service';
import { PathfindingService } from '../path-finder/path-finder.service';
import { NavigationController } from './navigation.controller';

@Module({
  providers: [LocationGateway, PrismaService, GoogleMapsService, PathfindingService],
  controllers: [NavigationController]
})
export class LocationModule {}
