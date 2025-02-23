import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingsModule } from './buildings/buildings.module';
import { GoogleMapsService } from './google-maps/google-maps.service';
import { PathFinderModule } from './path-finder/path-finder.module';
import { GoogleMapsController } from './google-maps/google-maps.controller';
import { LocationGateway } from './navigation/navigation.gateway';
import { RoomsModule } from './rooms/rooms.module';
import { EntrancesModule } from './entrances/entrances.module';
import { PrismaService } from '../prisma/prisma.service';
import { PathfindingService } from './path-finder/path-finder.service';

@Module({
  imports: [BuildingsModule, PathFinderModule, RoomsModule, EntrancesModule],
  controllers: [AppController, GoogleMapsController],
  providers: [AppService, GoogleMapsService, LocationGateway, PrismaService, PathfindingService],
})
export class AppModule {}
