import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { GoogleMapsService } from '../google-maps/google-maps.service';
import { PathfindingService } from '../path-finder/path-finder.service';

@WebSocketGateway({ cors: true })
@Injectable()
export class LocationGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly prisma: PrismaService,
    private readonly googleMapsService: GoogleMapsService,
    private readonly pathfindingService: PathfindingService 
  ) {}

  @SubscribeMessage('updateLocation')
  async handleLocationUpdate(
    @MessageBody() data: { userId: string; lat: number; lng: number; buildingId?: string; roomId?: string },
    @ConnectedSocket() client: Socket
  ) {
    try {
      // Save or update user's location in the database
      await this.prisma.userLocation.upsert({
        where: { userId: data.userId },
        update: { lat: data.lat, lng: data.lng, buildingId: data.buildingId, roomId: data.roomId },
        create: { userId: data.userId, lat: data.lat, lng: data.lng, buildingId: data.buildingId, roomId: data.roomId }
      });

      if (!data.buildingId) {
        // Outdoor navigation using Google Maps API
        const outdoorRoute = await this.googleMapsService.getRoute(`${data.lat},${data.lng}`, 'destination');
        this.server.emit('outdoorRoute', outdoorRoute);
      } else if (data.roomId) {
        // Indoor navigation using Pathfinding Service
        const indoorPath = await this.pathfindingService.findShortestPath(data.roomId, 'targetRoomId');
        this.server.emit('indoorRoute', indoorPath);
      }

      // Broadcast the updated location to all clients
      this.server.emit('locationUpdated', data);
    } catch (error) {
      console.error('Error handling location update:', error);
      client.emit('error', { message: 'Failed to update location', error: error.message });
    }
  }
}
