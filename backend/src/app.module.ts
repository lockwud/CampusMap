import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingsModule } from './buildings/buildings.module';
import { GoogleMapsService } from './google-maps/google-maps.service';
import { PathFinderModule } from './path-finder/path-finder.module';
import { GoogleMapsController } from './google-maps/google-maps.controller';
import { RoomsModule } from './rooms/rooms.module';
import { EntrancesModule } from './entrances/entrances.module';
import { PrismaService } from '../prisma/prisma.service';
import { PathfindingService } from './path-finder/path-finder.service';
import { FloorsModule } from './floors/floors.module';
import { RoomNeighborModule } from './room-neighbor/room-neighbor.module';
import { LocationModule } from "./navigation/navigation.module"

@Module({
  imports: [BuildingsModule, PathFinderModule, RoomsModule, EntrancesModule, FloorsModule, RoomNeighborModule, LocationModule],
  controllers: [AppController, GoogleMapsController],
  providers: [AppService, GoogleMapsService, PrismaService, PathfindingService],
})
export class AppModule {}
