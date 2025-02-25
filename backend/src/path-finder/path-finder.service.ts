import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import  Graph  from 'graphology';
import dijkstra from 'graphology-shortest-path/dijkstra';

@Injectable()
export class PathfindingService {
  constructor(private readonly prisma: PrismaService) {}

  async findShortestPath(startRoomId: string, targetRoomId: string): Promise<string[]> {
    const graph = new Graph();
    const rooms = await this.prisma.room.findMany({ include: { neighbors: true } });

    for (const room of rooms) {
      graph.addNode(room.id);
    }

    for (const room of rooms) {
      for (const neighbor of room.neighbors) {
        if (!graph.hasEdge(room.id, neighbor.toRoomId)) {
          graph.addEdge(room.id, neighbor.toRoomId, { weight: neighbor.distance });
        }
      }
    }

    const path = dijkstra.bidirectional(graph, startRoomId, targetRoomId);
    if (!path) {
      throw new BadRequestException(`No path found from ${startRoomId} to ${targetRoomId}`);
    }

    return path;
  }
}
